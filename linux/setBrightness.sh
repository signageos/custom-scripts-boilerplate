#!/usr/bin/bash

BRIGHTNESS="$SOS_CONFIG_brightness"

export DISPLAY=$(ls /tmp/.X11-unix | tr 'X' ':' | head -n 1 | sed 's/=//g')
export XAUTHORITY=$(ps aux | grep Xorg | grep -Po 'auth \K[^\s]*' | tail -1)

DISPLAY_NAME=$(xrandr | grep " connected" | tail -n 1 | cut -d ' ' -f 1)
xrandr --output "$DISPLAY_NAME" --brightness "$BRIGHTNESS"
