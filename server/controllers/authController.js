const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// @desc    Register a new user
// @route   POST /api/auth/signup
// @access  Public

const signupUser = async (req, res) => {
    try {
        const {
            fullName,
            username,
            email,
            password,
            purpose,
        } = req.body;

        // Check required fields
        if (!fullName || !username || !email || !password || !purpose) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }

        // Check existing email
        const emailExists = await User.findOne({ email });

        if (emailExists) {
            return res.status(400).json({
                success: false,
                message: "Email already exists",
            });
        }

        // Check existing username
        const usernameExists = await User.findOne({ username });

        if (usernameExists) {
            return res.status(400).json({
                success: false,
                message: "Username already taken",
            });
        }

        // Create user
        const user = await User.create({
            fullName,
            username,
            email,
            password,
            purpose,
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            token: generateToken(user._id),
            user: {
                id: user._id,
                fullName: user.fullName,
                username: user.username,
                email: user.email,
                purpose: user.purpose,
            },
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

module.exports = {
    signupUser,
};