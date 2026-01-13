/**
 * 1j0y - WebAssembly Joystick Input Library
 *
 * A TypeScript wrapper for joystick/gamepad input using WebAssembly (Emscripten)
 * with event-driven API and optional WebSocket communication.
 */
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
 * Categorizes a floating-point value into -1, 0, 1, or null
 */
declare function categorizeValue(value: number, threshold?: number): -1 | 0 | 1 | null;
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
export declare class JoystickHandler {
    private module;
    private ws;
    private pollingIntervalId;
    private config;
    private previousState;
    private axisChangeCallbacks;
    private buttonChangeCallbacks;
    private isRunning;
    constructor(config?: JoystickHandlerConfig);
    /**
     * Initialize the joystick handler and WASM module
     */
    init(): Promise<void>;
    /**
     * Connect to WebSocket server
     */
    private connectWebSocket;
    /**
     * Send data to WebSocket server
     */
    private sendToWebSocket;
    /**
     * Register callback for axis changes
     */
    onAxisChange(callback: (event: AxisChangeEvent) => void): void;
    /**
     * Register callback for button changes
     */
    onButtonChange(callback: (event: ButtonChangeEvent) => void): void;
    /**
     * Start polling for joystick input
     * Note: Uses browser APIs (window.setInterval) as this library is designed for web environments
     */
    start(): void;
    /**
     * Stop polling for joystick input
     */
    stop(): void;
    /**
     * Poll gamepad data and trigger events for changes
     */
    private poll;
    /**
     * Poll a specific gamepad for changes
     */
    private pollGamepad;
    /**
     * Get the current number of connected gamepads
     */
    getNumGamepads(): number;
    /**
     * Get a specific axis value
     */
    getAxisValue(gamepadIndex: number, axisIndex: number): number;
    /**
     * Get a specific button value
     */
    getButtonValue(gamepadIndex: number, buttonIndex: number): number;
    /**
     * Check if a specific button is pressed
     */
    isButtonPressed(gamepadIndex: number, buttonIndex: number): boolean;
    /**
     * Cleanup resources
     */
    cleanup(): void;
}
export { categorizeValue };
//# sourceMappingURL=index.d.ts.map