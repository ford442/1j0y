# 1j0y

WebAssembly joystick/gamepad input library with TypeScript wrapper. Provides an event-driven API for handling joystick input with optional WebSocket communication.

## Features

- 🎮 WebAssembly-based gamepad/joystick input handling
- 📦 Modular TypeScript API
- 🔌 Optional WebSocket integration
- 🎯 Event-driven architecture
- 📘 Full TypeScript type definitions
- 🚀 Built with Vite for modern JavaScript projects

## Installation

```bash
npm install 1j0y
```

## Usage

### Basic Example

```typescript
import { JoystickHandler } from '1j0y';

// Create a handler instance
const handler = new JoystickHandler({
  pollingInterval: 100, // Poll every 100ms
  websocketUrl: 'ws://localhost:3000' // Optional WebSocket server
});

// Register event listeners
handler.onAxisChange((event) => {
  console.log(`Gamepad ${event.gamepadIndex}, Axis ${event.axisIndex}: ${event.value}`);
  console.log(`Categorized value: ${event.categorizedValue}`); // -1, 0, 1, or null
});

handler.onButtonChange((event) => {
  console.log(`Gamepad ${event.gamepadIndex}, Button ${event.buttonIndex}: ${event.pressed ? 'pressed' : 'released'}`);
  console.log(`Analog value: ${event.value}`);
});

// Initialize and start
await handler.init();
handler.start();

// Later: stop and cleanup
handler.stop();
handler.cleanup();
```

### Configuration Options

```typescript
interface JoystickHandlerConfig {
  /** WebSocket server URL (optional) */
  websocketUrl?: string;
  
  /** Polling interval in milliseconds (default: 100ms) */
  pollingInterval?: number;
  
  /** Threshold for value change detection (default: 0.01) */
  changeThreshold?: number;
  
  /** Threshold for value categorization (default: 0.05) */
  categorizationThreshold?: number;
}
```

### API Reference

#### JoystickHandler Class

**Methods:**

- `async init()` - Initialize the WASM module and WebSocket connection
- `start()` - Start polling for input
- `stop()` - Stop polling
- `cleanup()` - Clean up resources
- `onAxisChange(callback)` - Register axis change event listener
- `onButtonChange(callback)` - Register button change event listener
- `getNumGamepads()` - Get number of connected gamepads
- `getAxisValue(gamepadIndex, axisIndex)` - Get current axis value
- `getButtonValue(gamepadIndex, buttonIndex)` - Get current button analog value
- `isButtonPressed(gamepadIndex, buttonIndex)` - Check if button is pressed

**Event Types:**

```typescript
interface AxisChangeEvent {
  gamepadIndex: number;
  axisIndex: number;
  value: number; // Raw value from -1 to 1
  categorizedValue: -1 | 0 | 1 | null; // Simplified value
}

interface ButtonChangeEvent {
  gamepadIndex: number;
  buttonIndex: number;
  value: number; // Analog value 0 to 1
  pressed: boolean; // Digital state
  categorizedValue: -1 | 0 | 1 | null;
}
```

## Building from Source

### Prerequisites

- Node.js 18+
- Emscripten SDK (for building WASM)

### Build Steps

```bash
# Install dependencies
npm install

# Build WASM module and TypeScript
npm run build

# Or build individually
npm run build:wasm  # Build C++ to WASM
npm run build:vite  # Build TypeScript
```

## WebSocket Protocol

When a WebSocket URL is configured, the library sends JSON messages for input changes:

```json
{
  "type": "joystick",
  "index": 0,
  "value": -1
}
```

```json
{
  "type": "button",
  "index": 2,
  "value": 1
}
```

## License

MIT

