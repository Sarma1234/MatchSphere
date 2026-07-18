const ApiError = require("../utils/ApiError");

const errorHandler = (err, req, res, next) => {

    console.error("========== ERROR ==========");
    console.error(err);
    console.error("===========================");

    let error = err;

    if (!(error instanceof ApiError)) {
        error = new ApiError(
            err.statusCode || 500,
            err.message || "Internal Server Error"
        );
    }

    const response = {
        success: false,
        statusCode: error.statusCode,
        message: error.message,
        errors: error.errors || [],
    };

    if (process.env.NODE_ENV === "development") {
        response.stack = error.stack;
    }

    res.status(error.statusCode).json(response);
};

module.exports = errorHandler;