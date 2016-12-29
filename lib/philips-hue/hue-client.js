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

module.exports.updateLight = function (id, state, brightness, hue, saturation) {
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
        console.log('DONE!!!');
    } );
}

module.exports.getLight = function (id) {
    request({
        url: 'http://philips-hue/api/' + username + '/lights/' + id,
        method: 'GET',
        json: true,
    }, (error, response, body) => {
        console.log(body);
    } );
}
