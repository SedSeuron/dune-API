function logErrors (err, req, res, next) {
    console.log(err);
    next (err);
};

function errorHandler (err, req, res, next) {
    console.log("Mi errorHanler")
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
};

function boomErrorHandler (err, req, res, next) {
    console.log("Mi boomErrorHandler");
    if (err.isBoom) {
        const { output  } = err;
        res.status(output.statusCode).json(output.payload);
    } else {
    next (err);
    
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
}};


module.exports = { logErrors, errorHandler, boomErrorHandler };