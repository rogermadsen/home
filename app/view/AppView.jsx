'use strict'

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';

var Hello = require('./Hello');
var LightSwitch = require('./LightSwitch');
var SunriseButton = require('./SunriseButton');

injectTapEventPlugin();

module.exports = function (props) {

    console.log(props);

    return (<MuiThemeProvider>
      <div>
        <div>
          <Hello {...props}/>
        </div>
        <div>
            <LightSwitch id='123' {...props}/>
        </div>
        <div>
            <SunriseButton {...props}/>
        </div>
      </div>
    </MuiThemeProvider>)
}
