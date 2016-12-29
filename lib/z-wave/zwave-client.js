var request = require('request');

var LIGHT_ON = 1;
var LIGHT_OFF = 2;

module.exports.LIGHT_ON = LIGHT_ON;
module.exports.LIGHT_OFF = LIGHT_OFF;

module.exports.updateLight = function (id, state) {
    request({
        url: 'http://192.168.1.127:8083/ZAutomation/api/v1/devices/' + id + '/command/' +
            state === LIGHT_ON ? 'on' : 'off',
        method: 'GET',
        json: true
    }, (error, response, body) => {
        console.log('DONE!!!');
    });
}
