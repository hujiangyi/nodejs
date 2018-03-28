var express    = require('express');
var fs = require('fs');
var https = require('https');
var config = require('config');

var app        = express();
const log4js = require('./common/logger.js');
const logger = log4js.getLogger();
log4js.useLogger(app,logger);

var routers = config.get('routers');
routers.forEach(function (item) {
    var r = require(item[1]);
    app.use(item[0], r);
});

var port = process.env.PORT || 443;
httpsServer = https.createServer({
    key:fs.readFileSync('/etc/www.jay123.club/2_www.j' +
        'ay123.club.key'),
    cert:fs.readFileSync('/etc/www.jay123.club/1_www.jay123.club_bundle.crt')
},app);

httpsServer.listen(port);
console.log('Magic happens on port ' + port);