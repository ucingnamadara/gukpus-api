const cors = require('cors');

const corsOptions = {
    origin: '*', // Allow requests from any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow all HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allow these request headers
    exposedHeaders: 'Content-Range,X-Content-Range', // Expose these response headers
    credentials: true, // Allow sending credentials (cookies, auth headers, etc.)
    optionsSuccessStatus: 200 // Set successful OPTIONS status code
};

module.exports = cors(corsOptions);
