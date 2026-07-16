const express = require("express");

const router = express.Router();

const validate = require("../middleware/validate");
const { registerSchema, loginSchema } = require("../validators");
const auth = require("../middleware/auth");

const {
    register,
    login,
    getCurrentUser,
} = require("../controllers/AuthController");

// Register
router.post(
    "/register",
    validate(registerSchema),
    register
);

// Login
router.post(
    "/login",
    validate(loginSchema),
    login
);

// Get Current User
router.get(
    "/me",
    auth,
    getCurrentUser
);

module.exports = router;