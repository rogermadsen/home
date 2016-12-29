'use strict'

import React from 'react';
import Toggle from 'material-ui/Toggle';

module.exports = function (props) {

    function onToggle(temp, on) {
        if (on) {
            props.onLightOn(props.id);
        } else {
            props.onLightOff(props.id);
        }
    }

    var light = props.store.lights[props.id];
    var on = light.on === true;
    var updating = light.updating === true;
    return (
        <Toggle label={props.label} onToggle={onToggle} toggled={on} disabled={updating}/>
    )
};
