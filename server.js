/**
 * Magick-Mock
 * @author Lukasz Korzybski
 *  
 * This is a proxy server that will pass through all requests (except the
 * ones that you mock in routes.js module) to the chosen service (url).
 */

var express = require('express'),
	request = require('request');

var port = 8090,
	destServiceURL = 'http://localhost:8000',
	app = express(),
	proxyMode = false;

app.disable('etag');

if (process.argv.length >= 3 && process.argv[2] === '--proxy') {
	proxyMode = true;
} else {
	require('./routes')(app);
}

app.all('*', function(req, res) {
    console.log('Passing through: %s %s', req.route.method.toUpperCase(), req.originalUrl);
    req.pipe(request(destServiceURL + req.originalUrl)).pipe(res);
});

app.listen(port);

console.log('Listening on port ' + port);
console.log(proxyMode ? 'Entering proxy mode' : 'Entering proxy+mocks mode');
console.log('Proxying endpoint ' + destServiceURL);

