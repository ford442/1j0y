1joy:
	 em++ src/main.cpp -o 1j001.js \
	 -sALLOW_MEMORY_GROWTH=0 -sINITIAL_MEMORY=32mb \
	 -std=gnu++20 \
	 -sEXPORTED_FUNCTIONS='["_main","_str"]' -sEXPORTED_RUNTIME_METHODS='["ccall"]' \
	 --extern-pre-js fluid.js --extern-pre-js flui.js --extern-pre-js setUp.js --extern-pre-js startUp.js \
	 --extern-pre-js rSlider.js --extern-pre-js slideOut.js

all: 1joy
	echo 'Built 1ink.us 1joy.'
