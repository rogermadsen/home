'use strict'

import React from 'react';
import Toggle from 'material-ui/Toggle';
import Slider from 'material-ui/Slider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { HuePicker } from 'react-color';

module.exports = function (props) {
    var brightessSliderValue;
    var light = props.store.lights[props.id];
    var on = light.on === true;
    var updating = light.updating === true;

    function onToggle(temp, on) {
        if (on) {
            props.onLightOn(props.id);
        } else {
            props.onLightOff(props.id);
        }
    }

    function onSliderChange(event, val) {
        //console.log('onSliderChange: ' + val);
        brightessSliderValue = Math.floor(val);
    }

    function onSliderStop() {
        props.onLightBrightnessUpdate(props.id, brightessSliderValue);
    }

    function onHueSliderChange(color) {
        var val = 65535 * (color.hsl.h / 360);
        console.log(val);
        props.onLightHueUpdate(props.id, val);
    }

    // Only add brightness slider if the light is dimmable.
    let slider;
    if (light.supportsBrightness) {
        slider = <Slider value={light.brightness} min={0} max={255} onChange={onSliderChange} onDragStop={onSliderStop}/>
    }

    let hueSlider;
    if (light.supportsHue) {
        hueSlider = <HuePicker width='100%' onChangeComplete={onHueSliderChange}/>
    }

    return (
        <div>
        <Card>
        <CardText>
        <Toggle label={props.label} onToggle={onToggle} toggled={on} disabled={updating}/>
        {slider}
        {hueSlider}
        </CardText>
        </Card>
        </div>
    )
};
