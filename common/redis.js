var config = require('config');
var Redis = require('ioredis');
const log4js = require('../common/logger.js');
const logger = log4js.getLogger();

var client  = new Redis({
    port: config.get('redis.port'),
    host: config.get('redis.ip'),
    db: config.get('redis.db'),
    password: config.get('redis.auth')
});
client.on('error', function (err) {
    if (err) {
        logger.error('connect to redis error, check your redis config', err);
        process.exit(1);
    }
})

exports = module.exports = client;
