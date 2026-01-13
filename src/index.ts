/**
 * 1j0y - WebAssembly Joystick Input Library
 * 
 * A TypeScript wrapper for joystick/gamepad input using WebAssembly (Emscripten)
 * with event-driven API and optional WebSocket communication.
 */

// Type definitions for the WASM module
export interface WasmModule extends EmscriptenModule {
  _initJoystick(): number;
  _pollGamepad(): number;
  _getNumGamepads(): number;
  _getAxisValue(gamepadIndex: number, axisIndex: number): number;
  _getButtonValue(gamepadIndex: number, buttonIndex: number): number;
  _getButtonPressed(gamepadIndex: number, buttonIndex: number): number;
  _getNumAxes(gamepadIndex: number): number;
  _getNumButtons(gamepadIndex: number): number;
  _cleanupJoystick(): void;
}

/**
 * Joystick/Gamepad axis change event
 */
export interface AxisChangeEvent {
  gamepadIndex: number;
  axisIndex: number;
  value: number;
  categorizedValue: -1 | 0 | 1 | null;
}

/**
 * Joystick/Gamepad button change event
 */
export interface ButtonChangeEvent {
  gamepadIndex: number;
  buttonIndex: number;
  value: number;
  pressed: boolean;
  categorizedValue: -1 | 0 | 1 | null;
}

/**
 * Configuration options for JoystickHandler
 */
export interface JoystickHandlerConfig {
  /** WebSocket server URL (optional) */
  websocketUrl?: string;
  
  /** Polling interval in milliseconds (default: 100ms) */
  pollingInterval?: number;
  
  /** Threshold for value change detection (default: 0.01) */
  changeThreshold?: number;
  
  /** Threshold for value categorization (default: 0.05) */
  categorizationThreshold?: number;
}

/**
 * State tracker for gamepad axes and buttons
 */
interface GamepadState {
  numAxes: number;
  numButtons: number;
  axes: number[];
  buttons: number[];
}

/**
 * Categorizes a floating-point value into -1, 0, 1, or null
 */
function categorizeValue(value: number, threshold: number = 0.05): -1 | 0 | 1 | null {
  if (Math.abs(value - (-1)) < threshold) {
    return -1;
  } else if (Math.abs(value) < threshold) {
    return 0;
  } else if (Math.abs(value - 1) < threshold) {
    return 1;
  } else {
    return null;
  }
}

/**
 * JoystickHandler - Main class for handling joystick/gamepad input
 * 
 * Provides an event-driven API for monitoring joystick input and
 * optionally sending events to a WebSocket server.
 * 
 * @example
 * ```typescript
 * import { JoystickHandler } from '1j0y';
 * 
 * const handler = new JoystickHandler({
 *   websocketUrl: 'ws://localhost:3000',
 *   pollingInterval: 100
 * });
 * 
 * handler.onAxisChange((event) => {
 *   console.log(`Axis ${event.axisIndex}: ${event.value}`);
 * });
 * 
 * handler.onButtonChange((event) => {
 *   console.log(`Button ${event.buttonIndex}: ${event.pressed ? 'pressed' : 'released'}`);
 * });
 * 
 * await handler.init();
 * handler.start();
 * ```
 */
export class JoystickHandler {
  private module: WasmModule | null = null;
  private ws: WebSocket | null = null;
  private pollingIntervalId: number | null = null;
  private config: Required<JoystickHandlerConfig>;
  private previousState: Map<number, GamepadState> = new Map();
  private axisChangeCallbacks: Array<(event: AxisChangeEvent) => void> = [];
  private buttonChangeCallbacks: Array<(event: ButtonChangeEvent) => void> = [];
  private isRunning = false;

  constructor(config: JoystickHandlerConfig = {}) {
    this.config = {
      websocketUrl: config.websocketUrl || '',
      pollingInterval: config.pollingInterval || 100,
      changeThreshold: config.changeThreshold || 0.01,
      categorizationThreshold: config.categorizationThreshold || 0.05
    };
  }

  /**
   * Initialize the joystick handler and WASM module
   */
  async init(): Promise<void> {
    // Dynamically import the WASM module
    const create1j0yModule = (await import('./wasm-loader')).default;
    
    this.module = await create1j0yModule() as WasmModule;
    
    const result = this.module._initJoystick();
    if (result !== 1) {
      throw new Error('Failed to initialize joystick system');
    }

    // Initialize WebSocket if URL is provided
    if (this.config.websocketUrl) {
      this.connectWebSocket();
    }
  }

  /**
   * Connect to WebSocket server
   */
  private connectWebSocket(): void {
    if (!this.config.websocketUrl) return;

    try {
      this.ws = new WebSocket(this.config.websocketUrl);
      
      this.ws.onopen = () => {
        console.log('WebSocket connected');
      };
      
      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
      
      this.ws.onclose = () => {
        console.log('WebSocket disconnected');
      };
    } catch (error) {
      console.error('Failed to connect to WebSocket:', error);
    }
  }

  /**
   * Send data to WebSocket server
   */
  private sendToWebSocket(type: 'joystick' | 'button', index: number, value: number): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({ type, index, value }));
    }
  }

  /**
   * Register callback for axis changes
   */
  onAxisChange(callback: (event: AxisChangeEvent) => void): void {
    this.axisChangeCallbacks.push(callback);
  }

  /**
   * Register callback for button changes
   */
  onButtonChange(callback: (event: ButtonChangeEvent) => void): void {
    this.buttonChangeCallbacks.push(callback);
  }

  /**
   * Start polling for joystick input
   */
  start(): void {
    if (this.isRunning) {
      console.warn('JoystickHandler is already running');
      return;
    }

    if (!this.module) {
      throw new Error('Module not initialized. Call init() first.');
    }

    this.isRunning = true;
    this.pollingIntervalId = window.setInterval(() => {
      this.poll();
    }, this.config.pollingInterval);
  }

  /**
   * Stop polling for joystick input
   */
  stop(): void {
    if (!this.isRunning) {
      return;
    }

    this.isRunning = false;
    if (this.pollingIntervalId !== null) {
      clearInterval(this.pollingIntervalId);
      this.pollingIntervalId = null;
    }
  }

  /**
   * Poll gamepad data and trigger events for changes
   */
  private poll(): void {
    if (!this.module) return;

    const numGamepads = this.module._pollGamepad();
    if (numGamepads < 0) {
      console.error('Failed to poll gamepad data');
      return;
    }

    for (let gamepadIndex = 0; gamepadIndex < numGamepads; gamepadIndex++) {
      this.pollGamepad(gamepadIndex);
    }
  }

  /**
   * Poll a specific gamepad for changes
   */
  private pollGamepad(gamepadIndex: number): void {
    if (!this.module) return;

    const numAxes = this.module._getNumAxes(gamepadIndex);
    const numButtons = this.module._getNumButtons(gamepadIndex);

    // Initialize previous state if needed
    if (!this.previousState.has(gamepadIndex)) {
      this.previousState.set(gamepadIndex, {
        numAxes,
        numButtons,
        axes: new Array(numAxes).fill(0),
        buttons: new Array(numButtons).fill(0)
      });
    }

    const prevState = this.previousState.get(gamepadIndex)!;

    // Check axes
    for (let axisIndex = 0; axisIndex < numAxes; axisIndex++) {
      const value = this.module._getAxisValue(gamepadIndex, axisIndex);
      const prevValue = prevState.axes[axisIndex];

      if (Math.abs(value - prevValue) > this.config.changeThreshold) {
        prevState.axes[axisIndex] = value;
        
        const event: AxisChangeEvent = {
          gamepadIndex,
          axisIndex,
          value,
          categorizedValue: categorizeValue(value, this.config.categorizationThreshold)
        };

        // Trigger callbacks
        this.axisChangeCallbacks.forEach(callback => callback(event));

        // Send to WebSocket if connected
        if (event.categorizedValue !== null) {
          this.sendToWebSocket('joystick', axisIndex, event.categorizedValue);
        }
      }
    }

    // Check buttons
    for (let buttonIndex = 0; buttonIndex < numButtons; buttonIndex++) {
      const value = this.module._getButtonValue(gamepadIndex, buttonIndex);
      const pressed = this.module._getButtonPressed(gamepadIndex, buttonIndex) === 1;
      const prevValue = prevState.buttons[buttonIndex];

      if (Math.abs(value - prevValue) > this.config.changeThreshold) {
        prevState.buttons[buttonIndex] = value;
        
        const event: ButtonChangeEvent = {
          gamepadIndex,
          buttonIndex,
          value,
          pressed,
          categorizedValue: categorizeValue(value, this.config.categorizationThreshold)
        };

        // Trigger callbacks
        this.buttonChangeCallbacks.forEach(callback => callback(event));

        // Send to WebSocket if connected
        if (event.categorizedValue !== null) {
          this.sendToWebSocket('button', buttonIndex, event.categorizedValue);
        }
      }
    }
  }

  /**
   * Get the current number of connected gamepads
   */
  getNumGamepads(): number {
    if (!this.module) {
      return 0;
    }
    return this.module._getNumGamepads();
  }

  /**
   * Get a specific axis value
   */
  getAxisValue(gamepadIndex: number, axisIndex: number): number {
    if (!this.module) {
      return 0;
    }
    return this.module._getAxisValue(gamepadIndex, axisIndex);
  }

  /**
   * Get a specific button value
   */
  getButtonValue(gamepadIndex: number, buttonIndex: number): number {
    if (!this.module) {
      return 0;
    }
    return this.module._getButtonValue(gamepadIndex, buttonIndex);
  }

  /**
   * Check if a specific button is pressed
   */
  isButtonPressed(gamepadIndex: number, buttonIndex: number): boolean {
    if (!this.module) {
      return false;
    }
    return this.module._getButtonPressed(gamepadIndex, buttonIndex) === 1;
  }

  /**
   * Cleanup resources
   */
  cleanup(): void {
    this.stop();
    
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }

    if (this.module) {
      this.module._cleanupJoystick();
      this.module = null;
    }

    this.previousState.clear();
    this.axisChangeCallbacks = [];
    this.buttonChangeCallbacks = [];
  }
}

// Export utility function
export { categorizeValue };
