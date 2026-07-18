const ApiError = require("../utils/ApiError");

const validate = (schema) => {
    return (req, res, next) => {

        const result = schema.safeParse(req.body);

        if (!result.success) {
            console.log(JSON.stringify(result.error.issues, null, 2));

            const errors = result.error.issues.map(
                issue => issue.message
            );

            return next(
                new ApiError(
                    400,
                    "Validation Failed",
                    errors
                )
            );
        }

        req.body = result.data;

        next();
    };
};

module.exports = validate;