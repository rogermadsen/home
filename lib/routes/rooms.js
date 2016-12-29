var config = require('../config.js');

module.exports.register = function (app) {
    app.get('/api/rooms', function (req, res) {
        res.send(config.rooms);
    });
}
