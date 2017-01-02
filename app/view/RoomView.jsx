'use strict'

import React from 'react';

module.exports = function (props,  temp) {
    console.log('HEJ!');
    console.log('FOO: ' + props.route.foo);
    console.log(props);
    var lights = props.store.lights.map((light, index) => {
        return (
            <div key={index}>
                <LightSwitch id={index} label={light.name} {...props}/><br/>
            </div>)
    });

    return (
        <div>
            {lights}
        </div>)
}
