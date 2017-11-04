var coap = require('coap');

function test() {
    var req = coap.request('coap://localhost/Matteo')

    req.on('response', function(res) {


        //res.pipe(process.stdout)
        //res.on('end', function() {
        //    process.exit(0)
        //})
    });

    req.end();
}
