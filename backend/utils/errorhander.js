//This class can be used to create custom error objects with a specific status code
//It looks like you are defining a custom error class named ErrorHandler in your code. 
//This class extends the built-in Error class in JavaScript and adds a statusCode property for handling HTTP status codes.


class ErrorHandler extends Error {
    constructor(message, statusCode) {
        // Call the constructor of the parent class (Error)
        super(message);

        // Set the status code property
        this.statusCode = statusCode;

        // Capture the stack trace for debugging purposes
        Error.captureStackTrace(this, this.constructor);
    }
}

// Export the ErrorHandler class for use in other parts of your application
module.exports = ErrorHandler;
