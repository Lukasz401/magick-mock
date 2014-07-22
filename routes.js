module.exports = function(app) {
    var _       = require('lodash-node'),
        express = require('express'),
        moment  = require('moment');

    var log = function(req, res, next) {
            console.log('Handling: %s %s', req.route.method.toUpperCase(), req.originalUrl);
            next();
        },
        noCache = function(req, res, next) {
            res.set('Cache-Control', 'max-age=0');
            next();
        },
        middleware = [express.json(), log, noCache];

    app.get('/hello', middleware, function(req, res) {
        res.json({ msg: 'Hey there!' });
    });
};