# Magick-Mock

Reverse proxy server that will pass through all requests (except the ones that 
you mock in routes.js module) to the chosen service (url).

It is useful for various development and test scenarios. For eg. when work on 
frontend and backend is done in parallel then the missing backend endpoints can 
be very easily mocked.

# Run

Fist install dependencies:

    npm install

The mock has two modes:
 
 - proxy+mocks - will pass through, to the chosen service (url), all routes 
   except the ones that are mocked in routes.js file
 - proxy only - will ignore defined routes and pass through all traffic to 
   chosen destination service

Run in proxy+mocks run:

 	grunt mock

Run in proxy only run:
 
 	grunt proxy

The server is auto-reloading.

By default it listens on port 8090 and the proxied service is defined as
http://localhost:8000. Change both to your liking in the `server.js` module.

# Mock endpoints

It is very easy. Define mocks in the `routes.js` module.

Example mock endpoint:

    app.get('/hello', middleware, function(req, res) {
        res.json({ msg: 'Hey there!' });
    });

Check Express.js docs for more details.

# License

This projected is licensed under the terms of the MIT license.
