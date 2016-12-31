var request = require('request');

var username = 'QQQ-qguCZq3kkcczvzowNYozQSu9DdPlZktvYWj0';

var LIGHT_ON = 1;
var LIGHT_OFF = 2;

var lights = [{
    id: 5,
    room: 'Köket',
    name: 'Köksbord 1'
}]

module.exports.LIGHT_ON = LIGHT_ON;
module.exports.LIGHT_OFF = LIGHT_OFF;

module.exports.turnOnLight = function (id) {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://philips-hue/api/' + username + '/lights/' + id + '/state',
            method: 'PUT',
            json: true,
            body: {
                on: true
            }
        }, (error, response, body) => {
            console.log(body);
            resolve();
            //console.log('DONE!!!');
        } );
    });
}

module.exports.turnOffLight = function (id) {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://philips-hue/api/' + username + '/lights/' + id + '/state',
            method: 'PUT',
            json: true,
            body: {
                on: false
            }
        }, (error, response, body) => {
            console.log(body);
            resolve();
            //console.log('DONE!!!');
        } );
    });
}

module.exports.updateLight = function (id, state, brightness, hue, saturation) {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://philips-hue/api/' + username + '/lights/' + id + '/state',
            method: 'PUT',
            json: true,
            body: {
                on: state === LIGHT_ON,
                sat: saturation,
                bri: brightness,
                hue: hue
            }
        }, (error, response, body) => {
            console.log(body);
            resolve();
            //console.log('DONE!!!');
        } );
    });
}

module.exports.setLightBrightness = function (id, brightness) {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://philips-hue/api/' + username + '/lights/' + id + '/state',
            method: 'PUT',
            json: true,
            body: {
                bri: parseInt(brightness),
            }
        }, (error, response, body) => {
            console.log(body);
            resolve();
            //console.log('DONE!!!');
        } );
    });
}

module.exports.setHue = function (id, hue) {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://philips-hue/api/' + username + '/lights/' + id + '/state',
            method: 'PUT',
            json: true,
            body: {
                hue: parseInt(hue),
            }
        }, (error, response, body) => {
            console.log(body);
            resolve();
            //console.log('DONE!!!');
        } );
    });
}


module.exports.getLight = function (id) {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://philips-hue/api/' + username + '/lights/' + id,
            method: 'GET',
            json: true,
        }, (error, response, body) => {
            //console.log(body);
            resolve(body);
        } );
    });
}
