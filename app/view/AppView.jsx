'use strict'

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
var Actions = require('../Actions');

var Hello = require('./Hello');
var LightSwitch = require('./LightSwitch');
var SunriseButton = require('./SunriseButton');
var RoomListView = require('./RoomListView');
var RoomView = require('./RoomView');

//injectTapEventPlugin();

Actions.update();
//setInterval(function () {
//    Actions.update();
//}, 2000);

const route = (
    <Router history={hashHistory}>
      <Route path='/' component={RoomListView} />
      <Route path='/room1' component={Hello} />
    </Router>
);

module.exports = function (props) {
    return (
        <MuiThemeProvider>
        {getRoutes(props)}
        </MuiThemeProvider>
    )
}

function getRoutes(props) {
    return (
        <Router history={hashHistory}>
          <Route path='/' component={RoomListView} />
          <Route path='/room1' component={Hello} />
        </Router>
    );
}

//                    <!--<Route path='/room' foo='bar' {...props} component={props => <Hello {...props} />} />-->
