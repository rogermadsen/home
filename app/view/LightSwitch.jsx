'use strict'

import React from 'react';
import Toggle from 'material-ui/Toggle';

module.exports = function (props) {

    function onToggle(temp, on) {
        if (on) {
            props.onLightOn();
        } else {
            props.onLightOff();
        }
    }

    console.log('-- LightSwitch --');
    console.log(props);
    var on = props.store.on === true;
    return (
        <Toggle label='testing' onToggle={onToggle} toggled={on}/>
    )
};
