var hueClient = require('../philips-hue/hue-client');
var zwaveClient = require('../z-wave/zwave-client');
var config = require('../config');


module.exports.register = function (app) {
    app.get('/api/turnOnLight/:id', function (req, res) {
        var light = config.lights[req.params.id];
        console.log('TYPE: ' + light.type + ', ' + config.LIGHT_TYPE_PHILIPS_HUE);
        if (light.type === config.LIGHT_TYPE_PHILIPS_HUE) {
            hueClient.updateLight(light.id, hueClient.LIGHT_ON);
        } else {
            zwaveClient.updateLight(light.id, zwaveClient.LIGHT_ON);
        }
        res.send('hello world')
    })

    app.get('/api/turnOffLight/:id', function (req, res) {
        var light = config.lights[req.params.id];
        if (light.type === config.LIGHT_TYPE_PHILIPS_HUE) {
            hueClient.updateLight(light.id, hueClient.LIGHT_OFF);
        } else {
            zwaveClient.updateLight(light.id, zwaveClient.LIGHT_OFF);
        }
        res.send('hello world')
    })

    app.get('/api/test', function (req, res) {
        hueClient.getLight(5);
        res.send('hello world')
    })
}
