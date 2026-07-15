// const ApiError = require("../utils/ApiError");

// const errorHandler = (err, req, res, next) => {
//     let error = err;

//     // If it's not an instance of ApiError,
//     // convert it into one.
//     if (!(error instanceof ApiError)) {
//         error = new ApiError(
//             error.statusCode || 500,
//             error.message || "Internal Server Error"
//         );
//     }

//     return res.status(error.statusCode).json({
//         success: error.success,
//         statusCode: error.statusCode,
//         message: error.message,
//         errors: error.errors,
//         stack:
//             process.env.NODE_ENV === "development"
//                 ? error.stack
//                 : undefined,
//     });
// };


const ApiError = require("../utils/ApiError");

const errorHandler = (err, req, res, next) => {
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

