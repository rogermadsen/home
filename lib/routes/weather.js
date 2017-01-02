var request = require('request');

var weatherSymbolText = [
    'soligt', // Clear sky.
    'halvklart', // Nearly clear sky
    'varierande molnighet', // Variable cloudiness
    'halvklart', // Halfclear sky
    'molnigt', // Cloudy
    'molnigt', // Overcast
    'dimmigt', // Fog
    'skurar', // Rain showers
    'åska', // Thunderstorm
    'lätt snöblandat regn', // Light sleet
    'snow showers', // Snow showers
    'regn', // Rain
    'åska', // Thunderstorm
    'snöblandat regn', // Sleet
    'snö' // Snow fall
]

function getWeather() {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/13.19458/lat/55.720922/data.json',
            method: 'GET',
            json: true
        }, (error, response, body) => {
            resolve(body);
        });
    });
}

function say(text) {
    request({
        url: 'http://192.168.1.127:5005/sayall/' + text + '/sv/25',
        method: 'GET',
        json: true
    }, (error, response, body) => {});
}

module.exports.register = function (app) {
    app.get('/api/weather', function (req, res) {
        getWeather().then((weather) => {
            var temperature;
            var weatherSymb;
            var wind;

            weather.timeSeries[0].parameters.forEach((parameter) => {
                if (parameter.name === 't') {
                    temperature = parameter.values[0];
                } else if (parameter.name === 'Wsymb') {
                    weatherSymb = parameter.values[0]
                }
            });

            var weatherReportText = 'Det är ' + weatherSymbolText[weatherSymb - 1] +
                ' ute. Temperaturen är ' + Math.round(temperature) + ' grader.';

            say(weatherReportText);

        });
        res.send({});
    });

}
