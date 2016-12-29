'use strict'

import AppDispatcher from './AppDispatcher';
import ActionTypes from './ActionTypes';

module.exports = {
    turnOnLight: function (lightId) {
        AppDispatcher.dispatch({
            type: ActionTypes.LIGHT_ON,
            lightId: lightId
        });

        fetch('/api/turnOnLight', {
            method: 'get'
        }).then(function (response) {

        }).catch(function (err) {
            // Error :(
        });
    },

    turnOffLight: function (lightId) {
        AppDispatcher.dispatch({
            type: ActionTypes.LIGHT_OFF,
            lightId: lightId
        });

        fetch('/api/turnOffLight', {
            method: 'get'
        }).then(function (response) {

        }).catch(function (err) {
            // Error :(
        });

    },

    startSunrise() {
        fetch('/api/startSunset', {
            method: 'get'
        }).then(function (response) {

        }).catch(function (err) {
            // Error :(
        });
    }
}
