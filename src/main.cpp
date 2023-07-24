#include "../include/main.hpp"
#include <stdio.h>


EM_BOOL gamepad_callback(int eventType, const EmscriptenGamepadEvent *e, void *userData)
{

  if (e->connected)
  {
    for(int i = 0; i < e->numAxes; ++i)
      printf("Axis %d: %g\n", i, e->axis[i]);

    for(int i = 0; i < e->numButtons; ++i)
      printf("Button %d: Digital: %d, Analog: %g\n", i, e->digitalButton[i], e->analogButton[i]);
  }

  return 0;
}

EmscriptenGamepadEvent prevState[32];
int prevNumGamepads = 0;

void mainloop()
{
  EMSCRIPTEN_RESULT res = emscripten_sample_gamepad_data();
  if (res != EMSCRIPTEN_RESULT_SUCCESS)
  {
    printf("emscripten_sample_gamepad_data returned EMSCRIPTEN_RESULT_NOT_SUPPORTED.\n");
    emscripten_cancel_main_loop();
    return;
  }

  int numGamepads = emscripten_get_num_gamepads();
  if (numGamepads != prevNumGamepads)
  {
    printf("Number of connected gamepads: %d\n", numGamepads);
    prevNumGamepads = numGamepads;
  }

  for(int i = 0; i < numGamepads && i < 32; ++i)
  {
    EmscriptenGamepadEvent ge;
    int ret = emscripten_get_gamepad_status(i, &ge);
    if (ret == EMSCRIPTEN_RESULT_SUCCESS)
    {
      int g = ge.index;
      for(int j = 0; j < ge.numAxes; ++j)
      {
        if (ge.axis[j] != prevState[g].axis[j])
          printf("Gamepad %d, axis %d: %g\n", g, j, ge.axis[j]);
      }

      for(int j = 0; j < ge.numButtons; ++j)
      {
        if (ge.analogButton[j] != prevState[g].analogButton[j] || ge.digitalButton[j] != prevState[g].digitalButton[j])
          printf("Gamepad %d, button %d: Digital: %d, Analog: %g\n", g, j, ge.digitalButton[j], ge.analogButton[j]);
      }
      prevState[g] = ge;
    }
  }
}


EM_JS(void,js_main,(),{

"use strict";

function normalResStart(){

}
  
document.getElementById('pmhig').innerHTML=parseInt(window.innerHeight,10);
document.getElementById('ihig').innerHTML=parseInt(window.innerHeight,10);
document.getElementById('scanvas').height=parseInt(window.innerHeight,10);
document.getElementById('scanvas').width=parseInt(window.innerHeight,10);
const tem=document.getElementById('tim');
const ban=document.getElementById('menuBtn');
const sfr=document.getElementById('slideframe');
var $lt=tem.innerHTML;

function grab$lt(){
$lt=Math.round($lt);
}

$lt=tem.innerHTML;
grab$lt();
const slo=new Slideout({'panel':document.getElementById('panel'),'menu':document.getElementById('menu'),'padding':384,'tolerance':70,'easing':'cubic-bezier(.32,2,.55,.27)'});
ban.addEventListener('click',function(){slo.toggle();sfr.innerHTML="";
setTimeout(function(){
grab$lt();
slt=$lt/1000;
slt=Math.round(slt);
sfr.innerHTML='<input type='+'"te'+'xt" id'+'="time'+'slider"/'+'>';
const tsl=new rSlider({target:'#timeslider',values:{min:0.25,max:30.00},
step:[0.25],labels:false,tooltip:true,scale:false,});
grab$lt();
slt=($lt/1000);
slt=slt*100;
slt=Math.round(slt);
slt=slt/100;
tsl.setValues(slt);
document.getElementById('menu').addEventListener('click',function(){
$ll=tsl.getValue();
$ll=$ll*100;
$ll=Math.round($ll);
$ll=$ll/100;$ll=($ll*1000);
tem.innerHTML=$ll;
});
setTimeout(function(){
slt=tem.innerHTML;
},8);
},16)
;});

document.getElementById('startBtn').addEventListener('click',function(){
normalResStart();
});

setTimeout(function(){
document.getElementById('circle').width=window.innerWidth;
document.getElementById('circle').height=window.innerHeight;
document.getElementById('di').click();
},500);

});

int main(void){
EMSCRIPTEN_RESULT ret = emscripten_set_gamepadconnected_callback(0, 1, gamepad_callback);
ret = emscripten_set_gamepaddisconnected_callback(0, 1, gamepad_callback);

  emscripten_set_main_loop(mainloop, 10, 0);
  
js_main();
return 0;
}
