const express = require("express");

const router = express.Router();

const validate = require("../middleware/validate");
const { registerSchema, loginSchema } = require("../validators");

const {
    register,
    login,
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

module.exports = router;