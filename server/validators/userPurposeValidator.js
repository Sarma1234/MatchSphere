const { z } = require("zod");

/* -------------------------------------------------------------------------- */
/*                     Update User Purpose Answers                            */
/* -------------------------------------------------------------------------- */

const updateUserPurposeSchema = z.object({

    answers: z.record(z.any())

});

/* -------------------------------------------------------------------------- */

module.exports = {

    updateUserPurposeSchema,

};