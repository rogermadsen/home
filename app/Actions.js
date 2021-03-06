'use strict'

import AppDispatcher from './AppDispatcher';
import ActionTypes from './ActionTypes';

module.exports = {
    update: function () {
        // Get current state of lights and everything from the API.
        AppDispatcher.dispatch({
            type: ActionTypes.UPDATING
        });

        fetch('/api', {
            method: 'get'
        }).then(function (response) {
            response.json().then(function(data) {
                AppDispatcher.dispatch({
                    type: ActionTypes.UPDATED,
                    data: data
                });
            });
        }).catch(function (err) {
            // Error :(
        });
    },

    turnOnLight: function (lightId) {
        console.log('Lighton: ' + lightId);
        AppDispatcher.dispatch({
            type: ActionTypes.LIGHT_UPDATING,
            lightId: lightId
        });

        fetch('/api/turnOnLight/' + lightId, {
            method: 'get'
        }).then(function (response) {
            AppDispatcher.dispatch({
                type: ActionTypes.LIGHT_ON,
                lightId: lightId
            });
        }).catch(function (err) {
            // Error :(
        });
    },

    turnOffLight: function (lightId) {
        AppDispatcher.dispatch({
            type: ActionTypes.LIGHT_UPDATING,
            lightId: lightId
        });

        fetch('/api/turnOffLight/' + lightId, {
            method: 'get'
        }).then(function (response) {
            AppDispatcher.dispatch({
                type: ActionTypes.LIGHT_OFF,
                lightId: lightId
            });
        }).catch(function (err) {
            // Error :(
        });

    },

    setLightBrightness: function(lightId, brightnessValue) {
        console.log('Update bri: ' + brightnessValue);
        fetch('/api/setLightBrightness/' + lightId + '/' + brightnessValue, {
            method: 'get'
        }).then(function (response) {
            /*
            AppDispatcher.dispatch({
                type: ActionTypes.LIGHT_OFF,
                lightId: lightId
            });
            */
        }).catch(function (err) {
            // Error :(
        });
    },

    setLightHue: function(lightId, hueVal) {
        fetch('/api/lights/' + lightId + '/hue/' + hueVal, {
            method: 'get'
        }).then(function (response) {
            /*
            AppDispatcher.dispatch({
                type: ActionTypes.LIGHT_OFF,
                lightId: lightId
            });
            */
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
