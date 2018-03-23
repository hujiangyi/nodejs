const express = require('express');
const router = express.Router();
var redis   = require('redis');
var client  = redis.createClient('30003', '207.148.22.193');
client.auth("hujiangyi");
client.on("error", function(error) {
    console.log(error);
});


router.get('/set', function (req, res) {
    client.set('abc','123');
    res.send('hello, express')
});
router.get('/sv', function (req, res) {
    client.get('abc', function(error,re) {
        console.dir(re);
        res.send('hello, express,' + re);
    });
});

module.exports = router;