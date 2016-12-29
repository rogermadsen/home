var request = require('request');
var credentials = require('../../credentials.js');

var LIGHT_ON = 1;
var LIGHT_OFF = 2;

module.exports.LIGHT_ON = LIGHT_ON;
module.exports.LIGHT_OFF = LIGHT_OFF;

var ZWAYSession;

function authorize() {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://192.168.1.127:8083/ZAutomation/api/v1/login',
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

function updateLight(id, state) {
    var url = 'http://192.168.1.127:8083/ZAutomation/api/v1/devices/' + id + '/command/' + (state ===
        LIGHT_ON ? 'on' : 'off');

    console.log(url);
    request({
        url: url,
        method: 'GET',
        json: true,
        headers: {
            ZWAYSession: ZWAYSession
        }
    }, (error, response, body) => {
        if (body.code === 401) {
            // Not logged in.
            authorize().then(() => {
                updateLight(id, state);
            });
        } else {

        }

        console.log(body.code);
        console.log('DONE!!!' + JSON.stringify(body, null, 2));
    });
}

module.exports.updateLight = updateLight;
