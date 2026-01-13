/**
 * Type declarations for the Emscripten-generated WASM module
 * The actual module is built by Make/Emscripten to dist/1j0y.js
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

declare module '*/1j0y.js' {
  export default function create1j0yModule(): Promise<WasmModule>;
}
