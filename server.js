var express = require('express');
var app = express();

require('./lib/routes/light').register(app);
require('./lib/routes/sonos').register(app);
require('./lib/routes/root').register(app);
require('./lib/routes/weather').register(app);

app.use(express.static(__dirname +'/app'));

app.listen(3000, function() {
  console.log('Express server listening on port ' + app.get('port'));
});
