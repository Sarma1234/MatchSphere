const ApiError = require("../utils/ApiError");

const validate = (schema) => {

    return (req, res, next) => {

        // Zod schema
        if (typeof schema.safeParse === "function") {

            const result = schema.safeParse(req.body);

            if (!result.success) {

                return next(

                    new ApiError(

                        400,

                        "Validation Failed",

                        result.error.issues.map(
                            issue => issue.message
                        )

                    )

                );

            }

            req.body = result.data;

            return next();

        }

        // Joi schema
        if (typeof schema.validate === "function") {

            const { error, value } = schema.validate(

                req.body,

                {

                    abortEarly: false,

                    stripUnknown: true,

                }

            );

            if (error) {

                return next(

                    new ApiError(

                        400,

                        "Validation Failed",

                        error.details.map(
                            detail => detail.message
                        )

                    )

                );

            }

            req.body = value;

            return next();

        }

        return next(

            new ApiError(

                500,

                "Invalid validation schema supplied."

            )

        );

    };

};

module.exports = validate;