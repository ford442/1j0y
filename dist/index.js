function h(r, t = 0.05) {
  return Math.abs(r - -1) < t ? -1 : Math.abs(r) < t ? 0 : Math.abs(r - 1) < t ? 1 : null;
}
class d {
  constructor(t = {}) {
    this.module = null, this.ws = null, this.pollingIntervalId = null, this.previousState = /* @__PURE__ */ new Map(), this.axisChangeCallbacks = [], this.buttonChangeCallbacks = [], this.isRunning = !1, this.config = {
      websocketUrl: t.websocketUrl || "",
      pollingInterval: t.pollingInterval || 100,
      changeThreshold: t.changeThreshold || 0.01,
      categorizationThreshold: t.categorizationThreshold || 0.05
    };
  }
  /**
   * Initialize the joystick handler and WASM module
   */
  async init() {
    const t = (await import("./wasm-loader-mzpjN-62.js")).default;
    if (this.module = await t(), this.module._initJoystick() !== 1)
      throw new Error("Failed to initialize joystick system");
    this.config.websocketUrl && this.connectWebSocket();
  }
  /**
   * Connect to WebSocket server
   */
  connectWebSocket() {
    if (this.config.websocketUrl)
      try {
        this.ws = new WebSocket(this.config.websocketUrl), this.ws.onopen = () => {
          console.log("WebSocket connected");
        }, this.ws.onerror = (t) => {
          console.error("WebSocket error:", t);
        }, this.ws.onclose = () => {
          console.log("WebSocket disconnected");
        };
      } catch (t) {
        console.error("Failed to connect to WebSocket:", t);
      }
  }
  /**
   * Send data to WebSocket server
   */
  sendToWebSocket(t, e, o) {
    this.ws && this.ws.readyState === WebSocket.OPEN && this.ws.send(JSON.stringify({ type: t, index: e, value: o }));
  }
  /**
   * Register callback for axis changes
   */
  onAxisChange(t) {
    this.axisChangeCallbacks.push(t);
  }
  /**
   * Register callback for button changes
   */
  onButtonChange(t) {
    this.buttonChangeCallbacks.push(t);
  }
  /**
   * Start polling for joystick input
   */
  start() {
    if (this.isRunning) {
      console.warn("JoystickHandler is already running");
      return;
    }
    if (!this.module)
      throw new Error("Module not initialized. Call init() first.");
    this.isRunning = !0, this.pollingIntervalId = window.setInterval(() => {
      this.poll();
    }, this.config.pollingInterval);
  }
  /**
   * Stop polling for joystick input
   */
  stop() {
    this.isRunning && (this.isRunning = !1, this.pollingIntervalId !== null && (clearInterval(this.pollingIntervalId), this.pollingIntervalId = null));
  }
  /**
   * Poll gamepad data and trigger events for changes
   */
  poll() {
    if (!this.module) return;
    const t = this.module._pollGamepad();
    if (t < 0) {
      console.error("Failed to poll gamepad data");
      return;
    }
    for (let e = 0; e < t; e++)
      this.pollGamepad(e);
  }
  /**
   * Poll a specific gamepad for changes
   */
  pollGamepad(t) {
    if (!this.module) return;
    const e = this.module._getNumAxes(t), o = this.module._getNumButtons(t);
    this.previousState.has(t) || this.previousState.set(t, {
      numAxes: e,
      numButtons: o,
      axes: new Array(e).fill(0),
      buttons: new Array(o).fill(0)
    });
    const a = this.previousState.get(t);
    for (let s = 0; s < e; s++) {
      const i = this.module._getAxisValue(t, s), u = a.axes[s];
      if (Math.abs(i - u) > this.config.changeThreshold) {
        a.axes[s] = i;
        const n = {
          gamepadIndex: t,
          axisIndex: s,
          value: i,
          categorizedValue: h(i, this.config.categorizationThreshold)
        };
        this.axisChangeCallbacks.forEach((l) => l(n)), n.categorizedValue !== null && this.sendToWebSocket("joystick", s, n.categorizedValue);
      }
    }
    for (let s = 0; s < o; s++) {
      const i = this.module._getButtonValue(t, s), u = this.module._getButtonPressed(t, s) === 1, n = a.buttons[s];
      if (Math.abs(i - n) > this.config.changeThreshold) {
        a.buttons[s] = i;
        const l = {
          gamepadIndex: t,
          buttonIndex: s,
          value: i,
          pressed: u,
          categorizedValue: h(i, this.config.categorizationThreshold)
        };
        this.buttonChangeCallbacks.forEach((c) => c(l)), l.categorizedValue !== null && this.sendToWebSocket("button", s, l.categorizedValue);
      }
    }
  }
  /**
   * Get the current number of connected gamepads
   */
  getNumGamepads() {
    return this.module ? this.module._getNumGamepads() : 0;
  }
  /**
   * Get a specific axis value
   */
  getAxisValue(t, e) {
    return this.module ? this.module._getAxisValue(t, e) : 0;
  }
  /**
   * Get a specific button value
   */
  getButtonValue(t, e) {
    return this.module ? this.module._getButtonValue(t, e) : 0;
  }
  /**
   * Check if a specific button is pressed
   */
  isButtonPressed(t, e) {
    return this.module ? this.module._getButtonPressed(t, e) === 1 : !1;
  }
  /**
   * Cleanup resources
   */
  cleanup() {
    this.stop(), this.ws && (this.ws.close(), this.ws = null), this.module && (this.module._cleanupJoystick(), this.module = null), this.previousState.clear(), this.axisChangeCallbacks = [], this.buttonChangeCallbacks = [];
  }
}
export {
  d as JoystickHandler,
  h as categorizeValue
};
//# sourceMappingURL=index.js.map
