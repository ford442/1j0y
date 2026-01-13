1joy:
	mkdir -p dist
	em++ src/main.cpp -o dist/1j0y.js \
	-sALLOW_MEMORY_GROWTH=1 -sINITIAL_MEMORY=16mb \
	-std=gnu++20 \
	-sMODULARIZE=1 -sEXPORT_ES6=1 -sEXPORT_NAME='create1j0yModule' \
	-sEXPORTED_FUNCTIONS='["_initJoystick","_pollGamepad","_getNumGamepads","_getAxisValue","_getButtonValue","_getButtonPressed","_getNumAxes","_getNumButtons","_cleanupJoystick"]' \
	-sEXPORTED_RUNTIME_METHODS='["ccall","cwrap"]' \
	-sENVIRONMENT=web

all: 1joy
	@echo 'Built 1j0y WASM module in dist/'
