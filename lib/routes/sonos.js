var sonos = require('sonos');

var s = new sonos.Sonos('192.168.1.120');

module.exports.register = function (app) {
    app.get('/api/sonos', function (req, res) {
        //s.getQueue(console.log);
        //s.play('https://archive.org/download/testmp3testfile/mpthreetest.mp3', function (err, playing) {
        s.play('spotify:track:1AhDOtG9vPSOmsWgNW0BEY', function (err, playing) {
          console.log([err, playing])
        })
        res.send('hello world123');
    });
}
