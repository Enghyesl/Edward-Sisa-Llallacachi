function errorHandler(err, req, res, next) {
    console.error(err.stack);
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        error: {
            message: err.message || 'Error interno del servidor',
        },
    });
}

module.exports = errorHandler;
