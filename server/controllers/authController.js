const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const authService = require("../services/AuthService");

const register = asyncHandler(async (req, res) => {

    const user = await authService.register(req.body);

    return res.status(201).json(
        new ApiResponse(
            201,
            user,
            "User registered successfully"
        )
    );

});

const login = asyncHandler(async (req, res) => {

    const result = await authService.login(req.body);

    return res.status(200).json(
        new ApiResponse(
            200,
            result,
            "Login successful"
        )
    );

});
const getCurrentUser = asyncHandler(async (req, res) => {

    const user = await authService.getCurrentUser(req.user._id);

    return res.status(200).json(
        new ApiResponse(
            200,
            user,
            "User fetched successfully"
        )
    );

});

module.exports = {
    register,
    login,
    getCurrentUser,
};