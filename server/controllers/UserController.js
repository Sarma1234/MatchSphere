const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const userService = require("../services/UserService");

const getUsers = asyncHandler(async (req, res) => {

    const users = await userService.getUsers(
        req.user._id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            users,
            "Users fetched successfully"
        )
    );

});

module.exports = {
    getUsers,
};