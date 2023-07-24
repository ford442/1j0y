1joy:
	 em++ src/main.cpp -o 1j001.js \
	 -sALLOW_MEMORY_GROWTH=0 -sINITIAL_MEMORY=32mb \
	 -std=gnu++20 \
	 -sEXPORTED_FUNCTIONS='["_main"]' -sEXPORTED_RUNTIME_METHODS='["ccall"]' \
	 --extern-pre-js js/rSlider.js --extern-pre-js js/slideOut.js

all: 1joy
	echo 'Built 1ink.us 1joy.'
