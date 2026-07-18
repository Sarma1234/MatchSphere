const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const validate = require("../middleware/validate");

const userController = require("../controllers/UserController");

const {
    updateProfileSchema,
} = require("../validators/profileValidator");

/* -------------------------------------------------------------------------- */
/*                              User Profile                                  */
/* -------------------------------------------------------------------------- */

// Get logged-in user's profile
router.get(

    "/me",

    auth,

    userController.getMyProfile

);


// Update logged-in user's profile
router.put(
    "/me",

    (req, res, next) => {
        console.log("1. Route reached");
        next();
    },

    auth,

    (req, res, next) => {
        console.log("2. Auth passed");
        next();
    },

    validate(updateProfileSchema),

    (req, res, next) => {
        console.log("3. Validation passed");
        next();
    },

    userController.updateProfile
);


/* -------------------------------------------------------------------------- */
/*                         Active Purpose Switch                              */
/* -------------------------------------------------------------------------- */

// Switch active purpose
router.patch(

    "/me/purpose",

    auth,

    userController.switchActivePurpose

);

module.exports = router;