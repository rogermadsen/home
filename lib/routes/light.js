var hueClient = require('../philips-hue/hue-client');
var zwaveClient = require('../z-wave/zwave-client');
var config = require('../config');


module.exports.register = function (app) {
    app.get('/api/turnOnLight/:id', function (req, res) {
        var light = config.lights[req.params.id];
        console.log('TYPE: ' + light.type + ', ' + config.LIGHT_TYPE_PHILIPS_HUE);
        if (light.type === config.LIGHT_TYPE_PHILIPS_HUE) {
            hueClient.turnOnLight(light.id);
        } else {
            zwaveClient.turnOnLight(light.id);
        }
        res.send('hello world')
    })

    app.get('/api/turnOffLight/:id', function (req, res) {
        var light = config.lights[req.params.id];
        if (light.type === config.LIGHT_TYPE_PHILIPS_HUE) {
            hueClient.turnOffLight(light.id);
        } else {
            zwaveClient.turnOffLight(light.id);
        }
        res.send('hello world')
    })

    app.get('/api/setLightBrightness/:id/:brightness', function (req, res) {
        var light = config.lights[req.params.id];
        var brightness = req.params.brightness;
        //console.log('TYPE: ' + light.type + ', ' + config.LIGHT_TYPE_PHILIPS_HUE);
        if (light.type === config.LIGHT_TYPE_PHILIPS_HUE) {
            hueClient.setLightBrightness(light.id, brightness);
        } else {
            //zwaveClient.updateLight(light.id, zwaveClient.LIGHT_ON);
        }
        res.send('hello world')
    })

    app.get('/api/lights/:id/hue/:hue', function (req, res) {
        var light = config.lights[req.params.id];
        var hue = req.params.hue;
        //console.log('TYPE: ' + light.type + ', ' + config.LIGHT_TYPE_PHILIPS_HUE);
        if (light.type === config.LIGHT_TYPE_PHILIPS_HUE) {
            hueClient.setHue(light.id, hue);
        } else {
            //zwaveClient.updateLight(light.id, zwaveClient.LIGHT_ON);
        }
        res.send('hello world')
    })

    app.get('/api/test', function (req, res) {
        hueClient.getLight(5);
        res.send('hello world')
    })
}
