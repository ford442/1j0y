var Qe = (() => {
  var eA = import.meta.url;
  return function(p) {
    p = p || {};
    var g = typeof p < "u" ? p : {}, gA, K;
    g.ready = new Promise(function(e, I) {
      gA = e, K = I;
    }), Object.getOwnPropertyDescriptor(g.ready, "_initJoystick") || (Object.defineProperty(g.ready, "_initJoystick", { configurable: !0, get: function() {
      B("You are getting _initJoystick on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } }), Object.defineProperty(g.ready, "_initJoystick", { configurable: !0, set: function() {
      B("You are setting _initJoystick on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } })), Object.getOwnPropertyDescriptor(g.ready, "_pollGamepad") || (Object.defineProperty(g.ready, "_pollGamepad", { configurable: !0, get: function() {
      B("You are getting _pollGamepad on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } }), Object.defineProperty(g.ready, "_pollGamepad", { configurable: !0, set: function() {
      B("You are setting _pollGamepad on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } })), Object.getOwnPropertyDescriptor(g.ready, "_getNumGamepads") || (Object.defineProperty(g.ready, "_getNumGamepads", { configurable: !0, get: function() {
      B("You are getting _getNumGamepads on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } }), Object.defineProperty(g.ready, "_getNumGamepads", { configurable: !0, set: function() {
      B("You are setting _getNumGamepads on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } })), Object.getOwnPropertyDescriptor(g.ready, "_getAxisValue") || (Object.defineProperty(g.ready, "_getAxisValue", { configurable: !0, get: function() {
      B("You are getting _getAxisValue on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } }), Object.defineProperty(g.ready, "_getAxisValue", { configurable: !0, set: function() {
      B("You are setting _getAxisValue on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } })), Object.getOwnPropertyDescriptor(g.ready, "_getButtonValue") || (Object.defineProperty(g.ready, "_getButtonValue", { configurable: !0, get: function() {
      B("You are getting _getButtonValue on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } }), Object.defineProperty(g.ready, "_getButtonValue", { configurable: !0, set: function() {
      B("You are setting _getButtonValue on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } })), Object.getOwnPropertyDescriptor(g.ready, "_getButtonPressed") || (Object.defineProperty(g.ready, "_getButtonPressed", { configurable: !0, get: function() {
      B("You are getting _getButtonPressed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } }), Object.defineProperty(g.ready, "_getButtonPressed", { configurable: !0, set: function() {
      B("You are setting _getButtonPressed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } })), Object.getOwnPropertyDescriptor(g.ready, "_getNumAxes") || (Object.defineProperty(g.ready, "_getNumAxes", { configurable: !0, get: function() {
      B("You are getting _getNumAxes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } }), Object.defineProperty(g.ready, "_getNumAxes", { configurable: !0, set: function() {
      B("You are setting _getNumAxes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } })), Object.getOwnPropertyDescriptor(g.ready, "_getNumButtons") || (Object.defineProperty(g.ready, "_getNumButtons", { configurable: !0, get: function() {
      B("You are getting _getNumButtons on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } }), Object.defineProperty(g.ready, "_getNumButtons", { configurable: !0, set: function() {
      B("You are setting _getNumButtons on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } })), Object.getOwnPropertyDescriptor(g.ready, "_cleanupJoystick") || (Object.defineProperty(g.ready, "_cleanupJoystick", { configurable: !0, get: function() {
      B("You are getting _cleanupJoystick on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } }), Object.defineProperty(g.ready, "_cleanupJoystick", { configurable: !0, set: function() {
      B("You are setting _cleanupJoystick on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } })), Object.getOwnPropertyDescriptor(g.ready, "___stdio_exit") || (Object.defineProperty(g.ready, "___stdio_exit", { configurable: !0, get: function() {
      B("You are getting ___stdio_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } }), Object.defineProperty(g.ready, "___stdio_exit", { configurable: !0, set: function() {
      B("You are setting ___stdio_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } })), Object.getOwnPropertyDescriptor(g.ready, "onRuntimeInitialized") || (Object.defineProperty(g.ready, "onRuntimeInitialized", { configurable: !0, get: function() {
      B("You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } }), Object.defineProperty(g.ready, "onRuntimeInitialized", { configurable: !0, set: function() {
      B("You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
    } }));
    var IA = Object.assign({}, g), NA = !0;
    if (g.ENVIRONMENT)
      throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
    var N = "";
    function wA(e) {
      return g.locateFile ? g.locateFile(e, N) : N + e;
    }
    var FA;
    if (typeof document < "u" && document.currentScript && (N = document.currentScript.src), eA && (N = eA), N.indexOf("blob:") !== 0 ? N = N.substr(0, N.replace(/[?#].*/, "").lastIndexOf("/") + 1) : N = "", !(typeof window == "object" || typeof importScripts == "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
    var RA = g.print || console.log.bind(console), f = g.printErr || console.warn.bind(console);
    Object.assign(g, IA), IA = null, te(), g.arguments && g.arguments, u("arguments", "arguments_"), g.thisProgram && g.thisProgram, u("thisProgram", "thisProgram"), g.quit && g.quit, u("quit", "quit_"), n(typeof g.memoryInitializerPrefixURL > "u", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), n(typeof g.pthreadMainPrefixURL > "u", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), n(typeof g.cdInitializerPrefixURL > "u", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), n(typeof g.filePackagePrefixURL > "u", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"), n(typeof g.read > "u", "Module.read option was removed (modify read_ in JS)"), n(typeof g.readAsync > "u", "Module.readAsync option was removed (modify readAsync in JS)"), n(typeof g.readBinary > "u", "Module.readBinary option was removed (modify readBinary in JS)"), n(typeof g.setWindowTitle > "u", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)"), n(typeof g.TOTAL_MEMORY > "u", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"), u("read", "read_"), u("readAsync", "readAsync"), u("readBinary", "readBinary"), u("setWindowTitle", "setWindowTitle"), n(!0, "worker environment detected but not enabled at build time.  Add 'worker' to `-s ENVIRONMENT` to enable."), n(!0, "node environment detected but not enabled at build time.  Add 'node' to `-s ENVIRONMENT` to enable."), n(!0, "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.");
    function R(e) {
      R.shown || (R.shown = {}), R.shown[e] || (R.shown[e] = 1, f(e));
    }
    function u(e, I) {
      Object.getOwnPropertyDescriptor(g, e) || Object.defineProperty(g, e, {
        configurable: !0,
        get: function() {
          B("Module." + e + " has been replaced with plain " + I + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
        }
      });
    }
    function kA(e) {
      Object.getOwnPropertyDescriptor(g, e) && B("`Module." + e + "` was supplied but `" + e + "` not included in INCOMING_MODULE_JS_API");
    }
    function tA(e, I) {
      var t = "'" + e + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
      return I && (t += ". Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"), t;
    }
    function CA(e, I) {
      Object.getOwnPropertyDescriptor(g, e) || Object.defineProperty(g, e, {
        configurable: !0,
        get: function() {
          B(tA(e, I));
        }
      });
    }
    function A(e, I) {
      Object.getOwnPropertyDescriptor(g, e) || (g[e] = () => B(tA(e, I)));
    }
    var L;
    g.wasmBinary && (L = g.wasmBinary), u("wasmBinary", "wasmBinary"), g.noExitRuntime, u("noExitRuntime", "noExitRuntime"), typeof WebAssembly != "object" && B("no native wasm support detected");
    var S, b = !1;
    function n(e, I) {
      e || B("Assertion failed" + (I ? ": " + I : ""));
    }
    function mA(e) {
      var I = g["_" + e];
      return n(I, "Cannot call unknown function " + e + ", make sure it is exported"), I;
    }
    function iA(e, I, t, Q, s) {
      var r = {
        string: function(d) {
          var m = 0;
          if (d != null && d !== 0) {
            var yA = (d.length << 2) + 1;
            m = uA(yA), x(d, m, yA);
          }
          return m;
        },
        array: function(d) {
          var m = uA(d.length);
          return SA(d, m), m;
        }
      };
      function a(d) {
        return I === "string" ? P(d) : I === "boolean" ? !!d : d;
      }
      var i = mA(e), E = [], c = 0;
      if (n(I !== "array", 'Return type should not be "array".'), Q)
        for (var y = 0; y < Q.length; y++) {
          var J = r[t[y]];
          J ? (c === 0 && (c = ie()), E[y] = J(Q[y])) : E[y] = Q[y];
        }
      var AA = i.apply(null, E);
      function Be(d) {
        return c !== 0 && ne(c), a(d);
      }
      return AA = Be(AA), AA;
    }
    function pA(e, I, t, Q) {
      return function() {
        return iA(e, I, t, arguments);
      };
    }
    var nA = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function aA(e, I, t) {
      for (var Q = I + t, s = I; e[s] && !(s >= Q); ) ++s;
      if (s - I > 16 && e.subarray && nA)
        return nA.decode(e.subarray(I, s));
      for (var r = ""; I < s; ) {
        var a = e[I++];
        if (!(a & 128)) {
          r += String.fromCharCode(a);
          continue;
        }
        var i = e[I++] & 63;
        if ((a & 224) == 192) {
          r += String.fromCharCode((a & 31) << 6 | i);
          continue;
        }
        var E = e[I++] & 63;
        if ((a & 240) == 224 ? a = (a & 15) << 12 | i << 6 | E : ((a & 248) != 240 && R("Invalid UTF-8 leading byte 0x" + a.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), a = (a & 7) << 18 | i << 12 | E << 6 | e[I++] & 63), a < 65536)
          r += String.fromCharCode(a);
        else {
          var c = a - 65536;
          r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
        }
      }
      return r;
    }
    function P(e, I) {
      return e ? aA(k, e, I) : "";
    }
    function LA(e, I, t, Q) {
      if (!(Q > 0))
        return 0;
      for (var s = t, r = t + Q - 1, a = 0; a < e.length; ++a) {
        var i = e.charCodeAt(a);
        if (i >= 55296 && i <= 57343) {
          var E = e.charCodeAt(++a);
          i = 65536 + ((i & 1023) << 10) | E & 1023;
        }
        if (i <= 127) {
          if (t >= r) break;
          I[t++] = i;
        } else if (i <= 2047) {
          if (t + 1 >= r) break;
          I[t++] = 192 | i >> 6, I[t++] = 128 | i & 63;
        } else if (i <= 65535) {
          if (t + 2 >= r) break;
          I[t++] = 224 | i >> 12, I[t++] = 128 | i >> 6 & 63, I[t++] = 128 | i & 63;
        } else {
          if (t + 3 >= r) break;
          i > 1114111 && R("Invalid Unicode code point 0x" + i.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."), I[t++] = 240 | i >> 18, I[t++] = 128 | i >> 12 & 63, I[t++] = 128 | i >> 6 & 63, I[t++] = 128 | i & 63;
        }
      }
      return I[t] = 0, t - s;
    }
    function x(e, I, t) {
      return n(typeof t == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), LA(e, k, I, t);
    }
    typeof TextDecoder < "u" && new TextDecoder("utf-16le");
    function SA(e, I) {
      n(e.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)"), BA.set(e, I);
    }
    var O, BA, k, l, j, M;
    function QA(e) {
      O = e, g.HEAP8 = BA = new Int8Array(e), g.HEAP16 = new Int16Array(e), g.HEAP32 = l = new Int32Array(e), g.HEAPU8 = k = new Uint8Array(e), g.HEAPU16 = new Uint16Array(e), g.HEAPU32 = j = new Uint32Array(e), g.HEAPF32 = new Float32Array(e), g.HEAPF64 = M = new Float64Array(e);
    }
    var q = 5242880;
    g.TOTAL_STACK && n(q === g.TOTAL_STACK, "the stack size can no longer be determined at runtime");
    var W = g.INITIAL_MEMORY || 16777216;
    u("INITIAL_MEMORY", "INITIAL_MEMORY"), n(W >= q, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + W + "! (TOTAL_STACK=" + q + ")"), n(
      typeof Int32Array < "u" && typeof Float64Array < "u" && Int32Array.prototype.subarray != null && Int32Array.prototype.set != null,
      "JS engine does not provide full typed array support"
    ), n(!g.wasmMemory, "Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally"), n(W == 16777216, "Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically");
    var _;
    function EA() {
      var e = z();
      n((e & 3) == 0), l[e + 4 >> 2] = 34821223, l[e + 8 >> 2] = 2310721022, l[0] = 1668509029;
    }
    function v() {
      if (!b) {
        var e = z(), I = j[e + 4 >> 2], t = j[e + 8 >> 2];
        (I != 34821223 || t != 2310721022) && B("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + t.toString(16) + " 0x" + I.toString(16)), l[0] !== 1668509029 && B("Runtime error: The application has corrupted its heap memory area (address zero)!");
      }
    }
    (function() {
      var e = new Int16Array(1), I = new Int8Array(e.buffer);
      if (e[0] = 25459, I[0] !== 115 || I[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)";
    })();
    var rA = [], sA = [], oA = [], X = !1;
    function MA() {
      if (g.preRun)
        for (typeof g.preRun == "function" && (g.preRun = [g.preRun]); g.preRun.length; )
          YA(g.preRun.shift());
      Z(rA);
    }
    function GA() {
      v(), n(!X), X = !0, Z(sA);
    }
    function UA() {
      if (v(), g.postRun)
        for (typeof g.postRun == "function" && (g.postRun = [g.postRun]); g.postRun.length; )
          bA(g.postRun.shift());
      Z(oA);
    }
    function YA(e) {
      rA.unshift(e);
    }
    function JA(e) {
      sA.unshift(e);
    }
    function bA(e) {
      oA.unshift(e);
    }
    n(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), n(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), n(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), n(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    var w = 0, F = null, G = null, U = {};
    function _A(e) {
      w++, g.monitorRunDependencies && g.monitorRunDependencies(w), n(!U[e]), U[e] = 1, F === null && typeof setInterval < "u" && (F = setInterval(function() {
        if (b) {
          clearInterval(F), F = null;
          return;
        }
        var I = !1;
        for (var t in U)
          I || (I = !0, f("still waiting on run dependencies:")), f("dependency: " + t);
        I && f("(end of list)");
      }, 1e4));
    }
    function vA(e) {
      if (w--, g.monitorRunDependencies && g.monitorRunDependencies(w), n(U[e]), delete U[e], w == 0 && (F !== null && (clearInterval(F), F = null), G)) {
        var I = G;
        G = null, I();
      }
    }
    g.preloadedImages = {}, g.preloadedAudios = {};
    function B(e) {
      g.onAbort && g.onAbort(e), e = "Aborted(" + e + ")", f(e), b = !0;
      var I = new WebAssembly.RuntimeError(e);
      throw K(I), I;
    }
    var h = {
      error: function() {
        B("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1");
      },
      init: function() {
        h.error();
      },
      createDataFile: function() {
        h.error();
      },
      createPreloadedFile: function() {
        h.error();
      },
      createLazyFile: function() {
        h.error();
      },
      open: function() {
        h.error();
      },
      mkdev: function() {
        h.error();
      },
      registerDevice: function() {
        h.error();
      },
      analyzePath: function() {
        h.error();
      },
      loadFilesFromDB: function() {
        h.error();
      },
      ErrnoError: function() {
        h.error();
      }
    };
    g.FS_createDataFile = h.createDataFile, g.FS_createPreloadedFile = h.createPreloadedFile;
    var TA = "data:application/octet-stream;base64,";
    function cA(e) {
      return e.startsWith(TA);
    }
    function HA(e) {
      return e.startsWith("file://");
    }
    function o(e, I) {
      return function() {
        var t = e, Q = I;
        return Q = g.asm, n(X, "native function `" + t + "` called before runtime initialization"), n(!0, "native function `" + t + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Q[e] || n(Q[e], "exported native function `" + t + "` not found"), Q[e].apply(null, arguments);
      };
    }
    var D;
    g.locateFile ? (D = "1j0y.wasm", cA(D) || (D = wA(D))) : D = new URL("data:application/wasm;base64,AGFzbQEAAAABmIGAgAAXYAABf2ADf39/AX9gAX8Bf2ABfwBgAn9/AX9gAABgBH9/f38Bf2ADf35/AX5gAn9/AXxgBX9/f39/AX9gBn98f39/fwF/YAJ/fwBgAn5/AX9gBH9+fn8AYAJ8fwF8YAd/f39/f39/AX9gA39/fwBgBH9/f38AYAN+f38Bf2AFf39/f38AYAF8AX5gAn5+AXxgBH9/fn8BfgLOgoCAAAkDZW52MmVtc2NyaXB0ZW5fc2V0X2dhbWVwYWRjb25uZWN0ZWRfY2FsbGJhY2tfb25fdGhyZWFkAAYDZW52NWVtc2NyaXB0ZW5fc2V0X2dhbWVwYWRkaXNjb25uZWN0ZWRfY2FsbGJhY2tfb25fdGhyZWFkAAYDZW52HmVtc2NyaXB0ZW5fc2FtcGxlX2dhbWVwYWRfZGF0YQAAA2VudhtlbXNjcmlwdGVuX2dldF9udW1fZ2FtZXBhZHMAAANlbnYdZW1zY3JpcHRlbl9nZXRfZ2FtZXBhZF9zdGF0dXMABANlbnYVZW1zY3JpcHRlbl9tZW1jcHlfYmlnAAEWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQhmZF93cml0ZQAGA2VudhZlbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwAAIDZW52C3NldFRlbXBSZXQwAAMDw4CAgABCBQEAAAAICAQCAgUBAQQBAgcCAwMABQMCAgEEAA4BCQ8QAhESDAwTAQoLFAIAAAAFAQQNDRUFAAAAAAICAwADAhYJBIWAgIAAAXABBwcFh4CAgAABAYACgIACBpOAgIAAA38BQcCCwwILfwFBAAt/AUEACweeg4CAABgGbWVtb3J5AgARX193YXNtX2NhbGxfY3RvcnMACQxpbml0Sm95c3RpY2sACwtwb2xsR2FtZXBhZAAMDmdldE51bUdhbWVwYWRzAA0MZ2V0QXhpc1ZhbHVlAA4OZ2V0QnV0dG9uVmFsdWUADxBnZXRCdXR0b25QcmVzc2VkABAKZ2V0TnVtQXhlcwARDWdldE51bUJ1dHRvbnMAEg9jbGVhbnVwSm95c3RpY2sAExlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQAQX19lcnJub19sb2NhdGlvbgAkDF9fc3RkaW9fZXhpdAAeBm1hbGxvYwBEBGZyZWUARRVlbXNjcmlwdGVuX3N0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ADYChPUCQQAhAkEAIQMgAyACNgKA9QJBgA8hBEGA5gIhBUEAIQYgBCAGIAUQFRpBzQghB0EAIQggByAIEBYaDwuPBAEDfwJAIAJBgARJDQAgACABIAIQBRogAA8LIAAgAmohAwJAAkAgASAAc0EDcQ0AAkACQCAAQQNxDQAgACECDAELAkAgAg0AIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAkEDcUUNASACIANJDQALCwJAIANBfHEiBEHAAEkNACACIARBQGoiBUsNAANAIAIgASgCADYCACACIAEoAgQ2AgQgAiABKAIINgIIIAIgASgCDDYCDCACIAEoAhA2AhAgAiABKAIUNgIUIAIgASgCGDYCGCACIAEoAhw2AhwgAiABKAIgNgIgIAIgASgCJDYCJCACIAEoAig2AiggAiABKAIsNgIsIAIgASgCMDYCMCACIAEoAjQ2AjQgAiABKAI4NgI4IAIgASgCPDYCPCABQcAAaiEBIAJBwABqIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQAMAgsACwJAIANBBE8NACAAIQIMAQsCQCADQXxqIgQgAE8NACAAIQIMAQsgACECA0AgAiABLQAAOgAAIAIgAS0AAToAASACIAEtAAI6AAIgAiABLQADOgADIAFBBGohASACQQRqIgIgBE0NAAsLAkAgAiADTw0AA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA0cNAAsLIAAL8gICA38BfgJAIAJFDQAgACABOgAAIAIgAGoiA0F/aiABOgAAIAJBA0kNACAAIAE6AAIgACABOgABIANBfWogAToAACADQX5qIAE6AAAgAkEHSQ0AIAAgAToAAyADQXxqIAE6AAAgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIFayICQSBJDQAgAa1CgYCA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ATUCADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASkDADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATIBADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATMBADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATAAADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATEAADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASkDADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATUCADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASkDADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASkDADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATQCADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATUCADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASsDADkDAA8LIAAgAiADEQsACws9AQF/AkAgAFANAANAIAFBf2oiASAAp0EPcUHQDWotAAAgAnI6AAAgAEIPViEDIABCBIghACADDQALCyABCzYBAX8CQCAAUA0AA0AgAUF/aiIBIACnQQdxQTByOgAAIABCB1YhAiAAQgOIIQAgAg0ACwsgAQuIAQIBfgN/AkACQCAAQoCAgIAQWg0AIAAhAgwBCwNAIAFBf2oiASAAIABCCoAiAkIKfn2nQTByOgAAIABC/////58BViEDIAIhACADDQALCwJAIAKnIgNFDQADQCABQX9qIgEgAyADQQpuIgRBCmxrQTByOgAAIANBCUshBSAEIQMgBQ0ACwsgAQtwAQF/IwBBgAJrIgUkAAJAIAIgA0wNACAEQYDABHENACAFIAFB/wFxIAIgA2siA0GAAiADQYACSSICGxAVGgJAIAINAANAIAAgBUGAAhApIANBgH5qIgNB/wFLDQALCyAAIAUgAxApCyAFQYACaiQACw4AIAAgASACQQVBBhAnC40ZAxJ/An4BfCMAQbAEayIGJABBACEHIAZBADYCLAJAAkAgARAzIhhCf1UNAEEBIQhBigghCSABmiIBEDMhGAwBCwJAIARBgBBxRQ0AQQEhCEGNCCEJDAELQZAIQYsIIARBAXEiCBshCSAIRSEHCwJAAkAgGEKAgICAgICA+P8Ag0KAgICAgICA+P8AUg0A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IANBQGqtiCEBQgAhAgwBCyADRQ0AIAJBwAAgA2uthiABIAOtIgSIhCEBIAIgBIghAgsgACABNwMAIAAgAjcDCAviAwICfwJ+IwBBIGsiAiQAAkACQCABQv///////////wCDIgRCgICAgICAwP9DfCAEQoCAgICAgMCAvH98Wg0AIABCPIggAUIEhoQhBAJAIABC//////////8PgyIAQoGAgICAgICACFQNACAEQoGAgICAgICAwAB8IQUMAgsgBEKAgICAgICAgMAAfCEFIABCgICAgICAgIAIUg0BIAUgBEIBg3whBQwBCwJAIABQIARCgICAgICAwP//AFQgBEKAgICAgIDA//8AURsNACAAQjyIIAFCBIaEQv////////8Dg0KAgICAgICA/P8AhCEFDAELQoCAgICAgID4/wAhBSAEQv///////7//wwBWDQBCACEFIARCMIinIgNBkfcASQ0AIAJBEGogACABQv///////z+DQoCAgICAgMAAhCIEIANB/4h/ahA7IAIgACAEQYH4ACADaxA8IAIpAwAiBEI8iCACQQhqKQMAQgSGhCEFAkAgBEL//////////w+DIAIpAxAgAkEQakEIaikDAIRCAFKthCIEQoGAgICAgICACFQNACAFQgF8IQUMAQsgBEKAgICAgICAgAhSDQAgBUIBgyAFfCEFCyACQSBqJAAgBSABQoCAgICAgICAgH+DhL8LFQBBwILDAiQCQcCCA0EPakFwcSQBCwcAIwAjAWsLBAAjAgsEACMBCwcAPwBBEHQLUAECf0EAKAL0DiIBIABBA2pBfHEiAmohAAJAAkAgAkUNACAAIAFNDQELAkAgABBCTQ0AIAAQB0UNAQtBACAANgL0DiABDwsQJEEwNgIAQX8L6y8BC38jAEEQayIBJAACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgAEH0AUsNAAJAQQAoAtD+AiICQRAgAEELakF4cSAAQQtJGyIDQQN2IgR2IgBBA3FFDQACQAJAIABBf3NBAXEgBGoiBUEDdCIEQfj+AmoiACAEQYD/AmooAgAiBCgCCCIDRw0AQQAgAkF+IAV3cTYC0P4CDAELIAMgADYCDCAAIAM2AggLIARBCGohACAEIAVBA3QiBUEDcjYCBCAEIAVqIgQgBCgCBEEBcjYCBAwMCyADQQAoAtj+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AAwAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAADwAAAAQPAAAAAAkQAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAAAAAAAAAABEAAAAAEQAAAAAJEgAAAAAAEgAAEgAAGgAAABoaGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAAGhoaAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFwAAAAAXAAAAAAkUAAAAAAAUAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAAAAAAAAAAAAAABUAAAAAFQAAAAAJFgAAAAAAFgAAFgAAMDEyMzQ1Njc4OUFCQ0RFRgBB4A0LmAEFAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAABAAAAJi6AAAABAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAA/////woAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgBgAAQMFQAA==", import.meta.url).toString();
    function lA(e) {
      try {
        if (e == D && L)
          return new Uint8Array(L);
        if (!FA) throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        B(I);
      }
    }
    function KA() {
      return !L && NA && typeof fetch == "function" ? fetch(D, { credentials: "same-origin" }).then(function(e) {
        if (!e.ok)
          throw "failed to load wasm binary file at '" + D + "'";
        return e.arrayBuffer();
      }).catch(function() {
        return lA(D);
      }) : Promise.resolve().then(function() {
        return lA(D);
      });
    }
    function PA() {
      var e = {
        env: dA,
        wasi_snapshot_preview1: dA
      };
      function I(i, E) {
        var c = i.exports;
        g.asm = c, S = g.asm.memory, n(S, "memory not found in wasm exports"), QA(S.buffer), _ = g.asm.__indirect_function_table, n(_, "table not found in wasm exports"), JA(g.asm.__wasm_call_ctors), vA("wasm-instantiate");
      }
      _A("wasm-instantiate");
      var t = g;
      function Q(i) {
        n(g === t, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), t = null, I(i.instance);
      }
      function s(i) {
        return KA().then(function(E) {
          return WebAssembly.instantiate(E, e);
        }).then(function(E) {
          return E;
        }).then(i, function(E) {
          f("failed to asynchronously prepare wasm: " + E), HA(D) && f("warning: Loading from a file URI (" + D + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"), B(E);
        });
      }
      function r() {
        return !L && typeof WebAssembly.instantiateStreaming == "function" && !cA(D) && typeof fetch == "function" ? fetch(D, { credentials: "same-origin" }).then(function(i) {
          var E = WebAssembly.instantiateStreaming(i, e);
          return E.then(
            Q,
            function(c) {
              return f("wasm streaming compile failed: " + c), f("falling back to ArrayBuffer instantiation"), s(Q);
            }
          );
        }) : s(Q);
      }
      if (g.instantiateWasm)
        try {
          var a = g.instantiateWasm(e, I);
          return a;
        } catch (i) {
          return f("Module.instantiateWasm callback failed with error: " + i), !1;
        }
      return r().catch(K), {};
    }
    function Z(e) {
      for (; e.length > 0; ) {
        var I = e.shift();
        if (typeof I == "function") {
          I(g);
          continue;
        }
        var t = I.func;
        typeof t == "number" ? I.arg === void 0 ? V(t)() : V(t)(I.arg) : t(I.arg === void 0 ? null : I.arg);
      }
    }
    var T = [];
    function V(e) {
      var I = T[e];
      return I || (e >= T.length && (T.length = e + 1), T[e] = I = _.get(e)), n(_.get(e) == I, "JavaScript-side Wasm function table mirror is out of date!"), I;
    }
    var C = { inEventHandler: 0, removeAllEventListeners: function() {
      for (var e = C.eventHandlers.length - 1; e >= 0; --e)
        C._removeHandler(e);
      C.eventHandlers = [], C.deferredCalls = [];
    }, registerRemoveEventListeners: function() {
      C.removeEventListenersRegistered || (C.removeEventListenersRegistered = !0);
    }, deferredCalls: [], deferCall: function(e, I, t) {
      function Q(a, i) {
        if (a.length != i.length) return !1;
        for (var E in a)
          if (a[E] != i[E]) return !1;
        return !0;
      }
      for (var s in C.deferredCalls) {
        var r = C.deferredCalls[s];
        if (r.targetFunction == e && Q(r.argsList, t))
          return;
      }
      C.deferredCalls.push({
        targetFunction: e,
        precedence: I,
        argsList: t
      }), C.deferredCalls.sort(function(a, i) {
        return a.precedence < i.precedence;
      });
    }, removeDeferredCalls: function(e) {
      for (var I = 0; I < C.deferredCalls.length; ++I)
        C.deferredCalls[I].targetFunction == e && (C.deferredCalls.splice(I, 1), --I);
    }, canPerformEventHandlerRequests: function() {
      return C.inEventHandler && C.currentEventHandler.allowsDeferredCalls;
    }, runDeferredCalls: function() {
      if (C.canPerformEventHandlerRequests())
        for (var e = 0; e < C.deferredCalls.length; ++e) {
          var I = C.deferredCalls[e];
          C.deferredCalls.splice(e, 1), --e, I.targetFunction.apply(null, I.argsList);
        }
    }, eventHandlers: [], removeAllHandlersOnTarget: function(e, I) {
      for (var t = 0; t < C.eventHandlers.length; ++t)
        C.eventHandlers[t].target == e && (!I || I == C.eventHandlers[t].eventTypeString) && C._removeHandler(t--);
    }, _removeHandler: function(e) {
      var I = C.eventHandlers[e];
      I.target.removeEventListener(I.eventTypeString, I.eventListenerFunc, I.useCapture), C.eventHandlers.splice(e, 1);
    }, registerOrRemoveHandler: function(e) {
      var I = function(s) {
        ++C.inEventHandler, C.currentEventHandler = e, C.runDeferredCalls(), e.handlerFunc(s), C.runDeferredCalls(), --C.inEventHandler;
      };
      if (e.callbackfunc)
        e.eventListenerFunc = I, e.target.addEventListener(e.eventTypeString, I, e.useCapture), C.eventHandlers.push(e), C.registerRemoveEventListeners();
      else
        for (var t = 0; t < C.eventHandlers.length; ++t)
          C.eventHandlers[t].target == e.target && C.eventHandlers[t].eventTypeString == e.eventTypeString && C._removeHandler(t--);
    }, getNodeNameForTarget: function(e) {
      return e ? e == window ? "#window" : e == screen ? "#screen" : e && e.nodeName ? e.nodeName : "" : "";
    }, fullscreenEnabled: function() {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    } };
    function fA(e, I) {
      M[e >> 3] = I.timestamp;
      for (var t = 0; t < I.axes.length; ++t)
        M[e + t * 8 + 16 >> 3] = I.axes[t];
      for (var t = 0; t < I.buttons.length; ++t)
        typeof I.buttons[t] == "object" ? M[e + t * 8 + 528 >> 3] = I.buttons[t].value : M[e + t * 8 + 528 >> 3] = I.buttons[t];
      for (var t = 0; t < I.buttons.length; ++t)
        typeof I.buttons[t] == "object" ? l[e + t * 4 + 1040 >> 2] = I.buttons[t].pressed : l[e + t * 4 + 1040 >> 2] = I.buttons[t] == 1;
      l[e + 1296 >> 2] = I.connected, l[e + 1300 >> 2] = I.index, l[e + 8 >> 2] = I.axes.length, l[e + 12 >> 2] = I.buttons.length, x(I.id, e + 1304, 64), x(I.mapping, e + 1368, 64);
    }
    function xA(e, I) {
      if (!C.lastGamepadState) throw "emscripten_get_gamepad_status() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!";
      return e < 0 || e >= C.lastGamepadState.length ? -5 : C.lastGamepadState[e] ? (fA(I, C.lastGamepadState[e]), 0) : -7;
    }
    function OA() {
      if (!C.lastGamepadState) throw "emscripten_get_num_gamepads() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!";
      return C.lastGamepadState.length;
    }
    function jA(e, I, t) {
      k.copyWithin(e, I, I + t);
    }
    function qA() {
      return 2147483648;
    }
    function WA(e) {
      try {
        return S.grow(e - O.byteLength + 65535 >>> 16), QA(S.buffer), 1;
      } catch (I) {
        f("emscripten_realloc_buffer: Attempted to grow heap from " + O.byteLength + " bytes to " + e + " bytes, but got error: " + I);
      }
    }
    function XA(e) {
      var I = k.length;
      e = e >>> 0, n(e > I);
      var t = qA();
      if (e > t)
        return f("Cannot enlarge memory, asked to go up to " + e + " bytes, but the limit is " + t + " bytes!"), !1;
      let Q = (E, c) => E + (c - E % c) % c;
      for (var s = 1; s <= 4; s *= 2) {
        var r = I * (1 + 0.2 / s);
        r = Math.min(r, e + 100663296);
        var a = Math.min(t, Q(Math.max(e, r), 65536)), i = WA(a);
        if (i)
          return !0;
      }
      return f("Failed to grow the heap from " + I + " bytes to " + a + " bytes, not enough memory!"), !1;
    }
    function ZA() {
      return (C.lastGamepadState = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1;
    }
    function VA(e) {
      return e > 2 ? P(e) : e;
    }
    var zA = [0, document, window];
    function $A(e) {
      e = VA(e);
      var I = zA[e] || document.querySelector(e);
      return I;
    }
    function DA(e, I, t, Q, s, r, a) {
      C.gamepadEvent || (C.gamepadEvent = Ce(1432));
      var i = function(c) {
        var y = c || event, J = C.gamepadEvent;
        fA(J, y.gamepad), V(Q)(s, J, I) && y.preventDefault();
      }, E = {
        target: $A(e),
        allowsDeferredCalls: !0,
        eventTypeString: r,
        callbackfunc: Q,
        handlerFunc: i,
        useCapture: t
      };
      C.registerOrRemoveHandler(E);
    }
    function Ae(e, I, t, Q) {
      return !navigator.getGamepads && !navigator.webkitGetGamepads ? -1 : (DA(2, e, I, t, 26, "gamepadconnected"), 0);
    }
    function ee(e, I, t, Q) {
      return !navigator.getGamepads && !navigator.webkitGetGamepads ? -1 : (DA(2, e, I, t, 27, "gamepaddisconnected"), 0);
    }
    var Y = { buffers: [null, [], []], printChar: function(e, I) {
      var t = Y.buffers[e];
      n(t), I === 0 || I === 10 ? ((e === 1 ? RA : f)(aA(t, 0)), t.length = 0) : t.push(I);
    }, varargs: void 0, get: function() {
      n(Y.varargs != null), Y.varargs += 4;
      var e = l[Y.varargs - 4 >> 2];
      return e;
    }, getStr: function(e) {
      var I = P(e);
      return I;
    }, get64: function(e, I) {
      return e >= 0 ? n(I === 0) : n(I === -1), e;
    } };
    function ge(e, I, t, Q) {
      for (var s = 0, r = 0; r < t; r++) {
        var a = l[I >> 2], i = l[I + 4 >> 2];
        I += 8;
        for (var E = 0; E < i; E++)
          Y.printChar(e, k[a + E]);
        s += i;
      }
      return l[Q >> 2] = s, 0;
    }
    function Ie(e) {
    }
    function te() {
      kA("fetchSettings");
    }
    var dA = {
      emscripten_get_gamepad_status: xA,
      emscripten_get_num_gamepads: OA,
      emscripten_memcpy_big: jA,
      emscripten_resize_heap: XA,
      emscripten_sample_gamepad_data: ZA,
      emscripten_set_gamepadconnected_callback_on_thread: Ae,
      emscripten_set_gamepaddisconnected_callback_on_thread: ee,
      fd_write: ge,
      setTempRet0: Ie
    };
    PA(), g.___wasm_call_ctors = o("__wasm_call_ctors"), g._initJoystick = o("initJoystick"), g._pollGamepad = o("pollGamepad"), g._getNumGamepads = o("getNumGamepads"), g._getAxisValue = o("getAxisValue"), g._getButtonValue = o("getButtonValue"), g._getButtonPressed = o("getButtonPressed"), g._getNumAxes = o("getNumAxes"), g._getNumButtons = o("getNumButtons"), g._cleanupJoystick = o("cleanupJoystick"), g.___errno_location = o("__errno_location"), g.___stdio_exit = o("__stdio_exit");
    var Ce = g._malloc = o("malloc");
    g._free = o("free");
    var hA = g._emscripten_stack_init = function() {
      return (hA = g._emscripten_stack_init = g.asm.emscripten_stack_init).apply(null, arguments);
    };
    g._emscripten_stack_get_free = function() {
      return (g._emscripten_stack_get_free = g.asm.emscripten_stack_get_free).apply(null, arguments);
    }, g._emscripten_stack_get_base = function() {
      return (g._emscripten_stack_get_base = g.asm.emscripten_stack_get_base).apply(null, arguments);
    };
    var z = g._emscripten_stack_get_end = function() {
      return (z = g._emscripten_stack_get_end = g.asm.emscripten_stack_get_end).apply(null, arguments);
    }, ie = g.stackSave = o("stackSave"), ne = g.stackRestore = o("stackRestore"), uA = g.stackAlloc = o("stackAlloc");
    g.dynCall_jiji = o("dynCall_jiji"), A("intArrayFromString", !1), A("intArrayToString", !1), g.ccall = iA, g.cwrap = pA, A("setValue", !1), A("getValue", !1), A("allocate", !1), A("UTF8ArrayToString", !1), A("UTF8ToString", !1), A("stringToUTF8Array", !1), A("stringToUTF8", !1), A("lengthBytesUTF8", !1), A("stackTrace", !1), A("addOnPreRun", !1), A("addOnInit", !1), A("addOnPreMain", !1), A("addOnExit", !1), A("addOnPostRun", !1), A("writeStringToMemory", !1), A("writeArrayToMemory", !1), A("writeAsciiToMemory", !1), A("addRunDependency", !0), A("removeRunDependency", !0), A("FS_createFolder", !1), A("FS_createPath", !0), A("FS_createDataFile", !0), A("FS_createPreloadedFile", !0), A("FS_createLazyFile", !0), A("FS_createLink", !1), A("FS_createDevice", !0), A("FS_unlink", !0), A("getLEB", !1), A("getFunctionTables", !1), A("alignFunctionTables", !1), A("registerFunctions", !1), A("addFunction", !1), A("removeFunction", !1), A("getFuncWrapper", !1), A("prettyPrint", !1), A("dynCall", !1), A("getCompilerSetting", !1), A("print", !1), A("printErr", !1), A("getTempRet0", !1), A("setTempRet0", !1), A("callMain", !1), A("abort", !1), A("keepRuntimeAlive", !1), A("zeroMemory", !1), A("stringToNewUTF8", !1), A("emscripten_realloc_buffer", !1), A("ENV", !1), A("withStackSave", !1), A("ERRNO_CODES", !1), A("ERRNO_MESSAGES", !1), A("setErrNo", !1), A("inetPton4", !1), A("inetNtop4", !1), A("inetPton6", !1), A("inetNtop6", !1), A("readSockaddr", !1), A("writeSockaddr", !1), A("DNS", !1), A("getHostByName", !1), A("Protocols", !1), A("Sockets", !1), A("getRandomDevice", !1), A("traverseStack", !1), A("convertFrameToPC", !1), A("UNWIND_CACHE", !1), A("saveInUnwindCache", !1), A("convertPCtoSourceLocation", !1), A("readAsmConstArgsArray", !1), A("readAsmConstArgs", !1), A("mainThreadEM_ASM", !1), A("jstoi_q", !1), A("jstoi_s", !1), A("getExecutableName", !1), A("listenOnce", !1), A("autoResumeAudioContext", !1), A("dynCallLegacy", !1), A("getDynCaller", !1), A("dynCall", !1), A("callRuntimeCallbacks", !1), A("wasmTableMirror", !1), A("setWasmTableEntry", !1), A("getWasmTableEntry", !1), A("handleException", !1), A("runtimeKeepalivePush", !1), A("runtimeKeepalivePop", !1), A("callUserCallback", !1), A("maybeExit", !1), A("safeSetTimeout", !1), A("asmjsMangle", !1), A("asyncLoad", !1), A("alignMemory", !1), A("mmapAlloc", !1), A("reallyNegative", !1), A("unSign", !1), A("reSign", !1), A("formatString", !1), A("PATH", !1), A("PATH_FS", !1), A("SYSCALLS", !1), A("getSocketFromFD", !1), A("getSocketAddress", !1), A("JSEvents", !1), A("registerKeyEventCallback", !1), A("specialHTMLTargets", !1), A("maybeCStringToJsString", !1), A("findEventTarget", !1), A("findCanvasEventTarget", !1), A("getBoundingClientRect", !1), A("fillMouseEventData", !1), A("registerMouseEventCallback", !1), A("registerWheelEventCallback", !1), A("registerUiEventCallback", !1), A("registerFocusEventCallback", !1), A("fillDeviceOrientationEventData", !1), A("registerDeviceOrientationEventCallback", !1), A("fillDeviceMotionEventData", !1), A("registerDeviceMotionEventCallback", !1), A("screenOrientation", !1), A("fillOrientationChangeEventData", !1), A("registerOrientationChangeEventCallback", !1), A("fillFullscreenChangeEventData", !1), A("registerFullscreenChangeEventCallback", !1), A("registerRestoreOldStyle", !1), A("hideEverythingExceptGivenElement", !1), A("restoreHiddenElements", !1), A("setLetterbox", !1), A("currentFullscreenStrategy", !1), A("restoreOldWindowedStyle", !1), A("softFullscreenResizeWebGLRenderTarget", !1), A("doRequestFullscreen", !1), A("fillPointerlockChangeEventData", !1), A("registerPointerlockChangeEventCallback", !1), A("registerPointerlockErrorEventCallback", !1), A("requestPointerLock", !1), A("fillVisibilityChangeEventData", !1), A("registerVisibilityChangeEventCallback", !1), A("registerTouchEventCallback", !1), A("fillGamepadEventData", !1), A("registerGamepadEventCallback", !1), A("registerBeforeUnloadEventCallback", !1), A("fillBatteryEventData", !1), A("battery", !1), A("registerBatteryEventCallback", !1), A("setCanvasElementSize", !1), A("getCanvasElementSize", !1), A("demangle", !1), A("demangleAll", !1), A("jsStackTrace", !1), A("stackTrace", !1), A("getEnvStrings", !1), A("checkWasiClock", !1), A("flush_NO_FILESYSTEM", !1), A("writeI53ToI64", !1), A("writeI53ToI64Clamped", !1), A("writeI53ToI64Signaling", !1), A("writeI53ToU64Clamped", !1), A("writeI53ToU64Signaling", !1), A("readI53FromI64", !1), A("readI53FromU64", !1), A("convertI32PairToI53", !1), A("convertU32PairToI53", !1), A("setImmediateWrapped", !1), A("clearImmediateWrapped", !1), A("polyfillSetImmediate", !1), A("uncaughtExceptionCount", !1), A("exceptionLast", !1), A("exceptionCaught", !1), A("ExceptionInfo", !1), A("CatchInfo", !1), A("exception_addRef", !1), A("exception_decRef", !1), A("Browser", !1), A("funcWrappers", !1), A("getFuncWrapper", !1), A("setMainLoop", !1), A("wget", !1), A("FS", !1), A("MEMFS", !1), A("TTY", !1), A("PIPEFS", !1), A("SOCKFS", !1), A("_setNetworkCallback", !1), A("tempFixedLengthArray", !1), A("miniTempWebGLFloatBuffers", !1), A("heapObjectForWebGLType", !1), A("heapAccessShiftForWebGLHeap", !1), A("GL", !1), A("emscriptenWebGLGet", !1), A("computeUnpackAlignedImageSize", !1), A("emscriptenWebGLGetTexPixelData", !1), A("emscriptenWebGLGetUniform", !1), A("webglGetUniformLocation", !1), A("webglPrepareUniformLocationsBeforeFirstUse", !1), A("webglGetLeftBracePos", !1), A("emscriptenWebGLGetVertexAttrib", !1), A("writeGLArray", !1), A("AL", !1), A("SDL_unicode", !1), A("SDL_ttfContext", !1), A("SDL_audio", !1), A("SDL", !1), A("SDL_gfx", !1), A("GLUT", !1), A("EGL", !1), A("GLFW_Window", !1), A("GLFW", !1), A("GLEW", !1), A("IDBStore", !1), A("runAndAbortIfError", !1), A("warnOnce", !1), A("stackSave", !1), A("stackRestore", !1), A("stackAlloc", !1), A("AsciiToString", !1), A("stringToAscii", !1), A("UTF16ToString", !1), A("stringToUTF16", !1), A("lengthBytesUTF16", !1), A("UTF32ToString", !1), A("stringToUTF32", !1), A("lengthBytesUTF32", !1), A("allocateUTF8", !1), A("allocateUTF8OnStack", !1), g.writeStackCookie = EA, g.checkStackCookie = v, CA("ALLOC_NORMAL", !1), CA("ALLOC_STACK", !1);
    var H;
    G = function e() {
      H || $(), H || (G = e);
    };
    function ae() {
      hA(), EA();
    }
    function $(e) {
      if (w > 0 || (ae(), MA(), w > 0))
        return;
      function I() {
        H || (H = !0, g.calledRun = !0, !b && (GA(), gA(g), g.onRuntimeInitialized && g.onRuntimeInitialized(), n(!g._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'), UA()));
      }
      g.setStatus ? (g.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          g.setStatus("");
        }, 1), I();
      }, 1)) : I(), v();
    }
    if (g.run = $, g.preInit)
      for (typeof g.preInit == "function" && (g.preInit = [g.preInit]); g.preInit.length > 0; )
        g.preInit.pop()();
    return $(), p.ready;
  };
})();
export {
  Qe as default
};
//# sourceMappingURL=1j0y-BNVAy8s3.js.map
