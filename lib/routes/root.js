'use strict'

var hueClient = require('../philips-hue/hue-client');
var zwaveClient = require('../z-wave/zwave-client')
var config = require('../config');
var lights = config.lights;

var test = [1, 2, 3, 4, 5];
var sunsetOngoing = false;

module.exports.register = function (app) {
    app.get('/api', function (req, res) {
        var promises = [];
        lights.forEach((light) => {
            if (light.type === config.LIGHT_TYPE_PHILIPS_HUE) {
                promises.push(hueClient.getLight(light.id).then((result) => {
                    light.on = result.state.on;
                    light.brightness = result.state.bri;
                    light.supportsBrightness = true;
                    light.supportsHue = true;
                }));
            } else {
                promises.push(zwaveClient.getLight(light.id).then((result) => {
                    light.on = result.data.metrics.level === 'on';
                }));
            }
        });

        Promise.all(promises).then(() => {
            res.send(lights);
        });
    });

    app.get('/api/allLightsOff', function (req, res) {
        res.send('hello world123');
    });

    app.get('/api/startSunset', (req, res) => {
        if (sunsetOngoing) {
            res.send('Sunset already ongoing.');
            return;
        }

        sunsetOngoing = true;

        var p1 = new Promise((resolve, reject) => {
            resolve();
        });

        var sunriseDuration = 20000;
        var sunriseSteps = 100;
        var hueStart = 3000;
        var hueEnd = 10000;
        var hueIncrease = (hueEnd-hueStart) / sunriseSteps;
        var saturation = 255;
        var brightnessStart = 10;
        var brightnessEnd = 200;
        var brightnessIncrease = (brightnessEnd-brightnessStart) / sunriseSteps;
        var saturationStart = 255;
        var saturationEnd = 50;
        var saturationIncrease = (saturationEnd-saturationStart) / sunriseSteps

        for (var i = 0; i < sunriseSteps; i++) {

            let temp = function() {
                return new Promise((resolve, reject) => {
                    hueClient.updateLight(5, hueClient.LIGHT_ON, Math.floor(brightnessStart), Math.floor(hueStart), Math.floor(saturationStart));
                    hueStart += hueIncrease;
                    brightnessStart += brightnessIncrease;
                    saturationStart += saturationIncrease;
                    setTimeout(resolve, sunriseDuration/sunriseSteps);
                });
            }
            p1 = p1.then(temp);
        }

        p1.then(() => {
            sunsetOngoing = false;
        });

        res.send({});
    });
}
