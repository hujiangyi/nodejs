const express = require('express');
var config = require('config');
var UUID = require('uuid');
var cache   = require('../common/cache.js');
const log4js = require('../common/logger.js');
const logger = log4js.getLogger();

const router = express.Router();

router.get('/getuuid', function (req, res) {
    var userName = req.query.u;
    if (!userName) {
        userName = 'undefined'
    }
    var uuid = UUID.v1();
    logger.info('make ' + userName + '`s uuid is ' + uuid);
    res.json({uuid:uuid})
});

router.get('/set', function (req, res) {
    cache.set('abc','234');
    res.send('hello, express')
});

router.get('/get', function (req, res) {
    cache.get('abc', function(error,re) {
        logger.info(re);
        res.send('hello, express,' + re);
    });
});

module.exports = router;