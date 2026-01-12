#include "../include/main.hpp"
#include <stdio.h>
#include <string.h>

// Store gamepad state for comparison
EmscriptenGamepadEvent prevState[32];
int prevNumGamepads = 0;
int isInitialized = 0;

// Gamepad connection callback
EM_BOOL gamepad_callback(int eventType, const EmscriptenGamepadEvent *e, void *userData)
{
  if (e->connected)
  {
    printf("Gamepad connected: %s\n", e->id);
  }
  else
  {
    printf("Gamepad disconnected\n");
  }
  return 0;
}

// Initialize joystick system
EMSCRIPTEN_KEEPALIVE
int initJoystick()
{
  if (isInitialized)
  {
    return 1; // Already initialized
  }
  
  EMSCRIPTEN_RESULT ret = emscripten_set_gamepadconnected_callback(0, 1, gamepad_callback);
  if (ret != EMSCRIPTEN_RESULT_SUCCESS)
  {
    printf("Failed to set gamepad connected callback\n");
    return 0;
  }
  
  ret = emscripten_set_gamepaddisconnected_callback(0, 1, gamepad_callback);
  if (ret != EMSCRIPTEN_RESULT_SUCCESS)
  {
    printf("Failed to set gamepad disconnected callback\n");
    return 0;
  }
  
  // Initialize previous state
  memset(prevState, 0, sizeof(prevState));
  prevNumGamepads = 0;
  isInitialized = 1;
  
  printf("Joystick system initialized\n");
  return 1;
}

// Poll gamepad data and update internal state
EMSCRIPTEN_KEEPALIVE
int pollGamepad()
{
  if (!isInitialized)
  {
    return -1;
  }
  
  EMSCRIPTEN_RESULT res = emscripten_sample_gamepad_data();
  if (res != EMSCRIPTEN_RESULT_SUCCESS)
  {
    return -1;
  }
  
  int numGamepads = emscripten_get_num_gamepads();
  if (numGamepads != prevNumGamepads)
  {
    prevNumGamepads = numGamepads;
  }
  
  // Update state for all gamepads
  for(int i = 0; i < numGamepads && i < 32; ++i)
  {
    EmscriptenGamepadEvent ge;
    int ret = emscripten_get_gamepad_status(i, &ge);
    if (ret == EMSCRIPTEN_RESULT_SUCCESS)
    {
      prevState[ge.index] = ge;
    }
  }
  
  return numGamepads;
}

// Get number of connected gamepads
EMSCRIPTEN_KEEPALIVE
int getNumGamepads()
{
  return prevNumGamepads;
}

// Get axis value for a specific gamepad and axis
EMSCRIPTEN_KEEPALIVE
double getAxisValue(int gamepadIndex, int axisIndex)
{
  if (gamepadIndex < 0 || gamepadIndex >= 32)
  {
    return 0.0;
  }
  
  if (axisIndex < 0 || axisIndex >= prevState[gamepadIndex].numAxes)
  {
    return 0.0;
  }
  
  return prevState[gamepadIndex].axis[axisIndex];
}

// Get button analog value for a specific gamepad and button
EMSCRIPTEN_KEEPALIVE
double getButtonValue(int gamepadIndex, int buttonIndex)
{
  if (gamepadIndex < 0 || gamepadIndex >= 32)
  {
    return 0.0;
  }
  
  if (buttonIndex < 0 || buttonIndex >= prevState[gamepadIndex].numButtons)
  {
    return 0.0;
  }
  
  return prevState[gamepadIndex].analogButton[buttonIndex];
}

// Get button digital state (pressed/not pressed)
EMSCRIPTEN_KEEPALIVE
int getButtonPressed(int gamepadIndex, int buttonIndex)
{
  if (gamepadIndex < 0 || gamepadIndex >= 32)
  {
    return 0;
  }
  
  if (buttonIndex < 0 || buttonIndex >= prevState[gamepadIndex].numButtons)
  {
    return 0;
  }
  
  return prevState[gamepadIndex].digitalButton[buttonIndex];
}

// Get number of axes for a specific gamepad
EMSCRIPTEN_KEEPALIVE
int getNumAxes(int gamepadIndex)
{
  if (gamepadIndex < 0 || gamepadIndex >= 32)
  {
    return 0;
  }
  
  return prevState[gamepadIndex].numAxes;
}

// Get number of buttons for a specific gamepad
EMSCRIPTEN_KEEPALIVE
int getNumButtons(int gamepadIndex)
{
  if (gamepadIndex < 0 || gamepadIndex >= 32)
  {
    return 0;
  }
  
  return prevState[gamepadIndex].numButtons;
}

// Cleanup joystick system
EMSCRIPTEN_KEEPALIVE
void cleanup()
{
  isInitialized = 0;
  prevNumGamepads = 0;
  memset(prevState, 0, sizeof(prevState));
  printf("Joystick system cleaned up\n");
}
