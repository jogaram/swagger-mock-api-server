const express = require('express');
const middleware = require('swagger-express-middleware');
const swaggerMockApi = require('swagger-mock-api');
const app = express();

function serve(host, port, swaggerFile) {
    middleware(swaggerFile, app, function(err, middleware) {
        if (err) return;


        // Add all the Swagger Express Middleware, or just the ones you need.
        // NOTE: Some of these accept optional options (omitted here for brevity)
        app.use(
            middleware.metadata(),
            middleware.CORS(),
            middleware.files(),
            middleware.parseRequest(),
            middleware.validateRequest(),
            middleware.mock()
        );

        app.listen(port, function() {
            console.log(`Mock server for ${swaggerFile} running at http://${host}:${port}`);
        });
    });
}

module.exports = {
    serve: serve
};