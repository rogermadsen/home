var hueClient = require('../philips-hue/hue-client');

module.exports.register = function (app) {
    app.get('/api/turnOnLight', function (req, res) {
        hueClient.updateLight(5, hueClient.LIGHT_ON);
        res.send('hello world')
    })

    app.get('/api/turnOffLight', function (req, res) {
        hueClient.updateLight(5, hueClient.LIGHT_OFF);
        res.send('hello world')
    })

    app.get('/api/test', function (req, res) {
        hueClient.getLight(5);
        res.send('hello world')
    })
}
