const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const validate = require("../middleware/validate");

const userPurposeController = require("../controllers/UserPurposeController");

const {
    updateUserPurposeSchema,
} = require("../validators/userPurposeValidator");

/* -------------------------------------------------------------------------- */
/*                       Get All User Purposes                                */
/* -------------------------------------------------------------------------- */

router.get(

    "/",

    auth,

    userPurposeController.getAllPurposes

);

/* -------------------------------------------------------------------------- */
/*                     Get One Purpose Answers                                */
/* -------------------------------------------------------------------------- */

router.get(

    "/:purpose",

    auth,

    userPurposeController.getPurpose

);

/* -------------------------------------------------------------------------- */
/*                  Save / Update Purpose Answers                             */
/* -------------------------------------------------------------------------- */

router.put(

    "/:purpose",

    auth,

    validate(updateUserPurposeSchema),

    userPurposeController.updatePurpose

);

module.exports = router;