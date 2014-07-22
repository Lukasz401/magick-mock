# Magick-Mock

This is a proxy server that will pass through all requests (except the ones that you mock in routes.js module) to the chosen service (url).

It is useful for various development and test scenarios. For eg. when work on frontend and backend is done in parallel then
the backend can be mocked.

# Running
The mock has two modes:
 - proxy+mocks - will pass through, to the chosen service (url), all routes except the ones that are mocked in routes.js file
 - proxy only - will ignore defined routes and pass through all traffic to chosen destination service

 To run in proxy+mocks run:

 	grunt mock

 To run in proxy only run:
 
 	grunt proxy

The server is auto-reloading so no need to restart it manually after making changes.


# Writing mocks
Magick-mock make use of Express.js so check its docs for . Routes.js contains some example routes.

# License

This projected is licensed under the terms of the MIT license.
