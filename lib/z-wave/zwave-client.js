var request = require('request');
var credentials = require('../../credentials.js');
var config = require('../config.js');

var LIGHT_ON = 1;
var LIGHT_OFF = 2;

module.exports.LIGHT_ON = LIGHT_ON;
module.exports.LIGHT_OFF = LIGHT_OFF;

var ZWAYSession;

function authorize() {
    return new Promise((resolve, reject) => {
        request({
            url: config.zWaveUrl + ':8083/ZAutomation/api/v1/login',
            method: 'POST',
            json: true,
            body: {
                login: credentials.zwave.login,
                password: credentials.zwave.password
            }
        }, (error, response, body) => {
            ZWAYSession = body.data.sid;
            resolve();
        });
    });
}

function turnOnLight(id) {
    request({
        url: config.zWaveUrl + ':8083/ZAutomation/api/v1/devices/' + id + '/command/on',
        method: 'GET',
        json: true,
        headers: {
            ZWAYSession: ZWAYSession
        }
    }, (error, response, body) => {
        if (body.code === 401) {
            // Not logged in.
            authorize().then(() => {
                turnOnLight(id);
            });
        } else {

        }
    });
}

function turnOffLight(id) {
    request({
        url: config.zWaveUrl + ':8083/ZAutomation/api/v1/devices/' + id + '/command/off',
        method: 'GET',
        json: true,
        headers: {
            ZWAYSession: ZWAYSession
        }
    }, (error, response, body) => {
        if (body.code === 401) {
            // Not logged in.
            return authorize().then(() => {
                return turnOffLight(id);
            });
        } else {

        }
    });
}

function getLight(id) {
    return new Promise((resolve, reject) => {
        function recursive() {
            request({
                url: config.zWaveUrl + ':8083/ZAutomation/api/v1/devices/' + id,
                method: 'GET',
                json: true,
                headers: {
                    ZWAYSession: ZWAYSession
                }
            }, (error, response, body) => {
                if (body.code === 401) {
                    // Not logged in.
                    authorize().then(() => {
                        recursive(id);
                    });
                } else {
                    resolve(body);
                }
            });
        }
        recursive();
    })

}

module.exports.turnOnLight = turnOnLight;
module.exports.turnOffLight = turnOffLight;
module.exports.getLight = getLight;
