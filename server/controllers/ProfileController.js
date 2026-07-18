const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const profileService = require("../services/ProfileService");

const getMyProfile = asyncHandler(async (req, res) => {

    return res.status(200).json(
        new ApiResponse(
            200,
            req.user,
            "Profile fetched successfully"
        )
    );

});

const updateProfile = asyncHandler(async (req, res) => {
    console.log("req.user =", req.user);
console.log("req.user.id =", req.user.id);
console.log("req.user._id =", req.user._id);
console.log("req.body =", req.body);

    const updatedUser = await profileService.updateProfile(
        req.user._id,
        req.body
        
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            updatedUser,
            "Profile updated successfully"
        )
    );

});
const uploadProfilePhoto = asyncHandler(async (req, res) => {

    const user = await profileService.uploadProfilePhoto(
        req.user._id,
        req.file
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            user,
            "Photo uploaded successfully"
        )
    );

});
const deletePhoto = asyncHandler(async (req, res) => {

    const updatedUser = await profileService.deletePhoto(
        req.user._id,
        req.params.publicId
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            updatedUser,
            "Photo deleted successfully"
        )
    );

});
const setPrimaryPhoto = asyncHandler(async (req, res) => {

    const updatedUser = await profileService.setPrimaryPhoto(
        req.user._id,
        req.params.publicId
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            updatedUser,
            "Primary photo updated successfully"
        )
    );

});

module.exports = {
    getMyProfile,
    updateProfile,
    uploadProfilePhoto,
    deletePhoto,
    setPrimaryPhoto,
};