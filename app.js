var express    = require('express');
var app        = express();
var router        = require('./pages/user.js');

app.use('/home', router);

app.get('/', function(req, res) {
    console.log('get /');
    res.send('<h1>Hello World</h1>');
});
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens on port ' + port);