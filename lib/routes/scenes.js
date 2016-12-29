
module.exports.register = function (app) {
    app.get('/api/scenes', function (req, res) {
        res.send('hello world123');
    });
}
