var express    = require('express');
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

var port = config.get('http.port') || 8080;
app.listen(port);