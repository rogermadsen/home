'use strict'

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
var Actions = require('../Actions');

var Hello = require('./Hello');
var LightSwitch = require('./LightSwitch');
var SunriseButton = require('./SunriseButton');

injectTapEventPlugin();

Actions.update();
//setInterval(function () {
//    Actions.update();
//}, 2000);

module.exports = function (props) {
    var lights = props.store.lights.map((light, index) => {
        return (
            <div key={index}>
                <LightSwitch id={index} label={light.name} {...props}/><br/>
            </div>)
    });

    return (
        <MuiThemeProvider>
            <div>
                {lights}
                <div>
                    <SunriseButton {...props}/>
                </div>
            </div>
        </MuiThemeProvider>)
}
