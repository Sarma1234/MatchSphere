const userRepository = require("../repositories/UserRepository");
const ApiError = require("../utils/ApiError");
const uploadToCloudinary = require("../utils/uploadToCloudinary");
const cloudinary = require("../config/cloudinary");

class ProfileService {

    async updateProfile(userId, profileData) {

        const user = await userRepository.findById(userId);

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        const updatedUser = await userRepository.updateById(
            userId,
            profileData
        );

        return updatedUser;
    }

    // async deletePhoto(userId, publicId) {

    //     const user = await userRepository.findById(userId);

    //     if (!user) {
    //         throw new ApiError(404, "User not found");
    //     }

    //     const photo = user.photos.find(
    //         p => p.publicId === publicId
    //     );
    //     const wasPrimary = photo.isPrimary;

    //     if (!photo) {
    //         throw new ApiError(404, "Photo not found");
    //     }

    //     await cloudinary.uploader.destroy(publicId);

    //     const updatedUser = await userRepository.removePhoto(
    //         userId,
    //         publicId
    //     );

    // }

    async deletePhoto(userId, publicId) {

        // 1. Find the user
        const user = await userRepository.findById(userId);

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        // 2. Find the photo
        const photo = user.photos.find(
            p => p.publicId === publicId
        );

        if (!photo) {
            throw new ApiError(404, "Photo not found");
        }

        // 3. Remember whether it was the primary photo
        const wasPrimary = photo.isPrimary;

        // 4. Delete from Cloudinary
        await cloudinary.uploader.destroy(publicId);

        // 5. Remove from MongoDB
        const updatedUser = await userRepository.removePhoto(
            userId,
            publicId
        );

        // 6. If the deleted photo was primary,
        // make the first remaining photo primary
        if (
            wasPrimary &&
            updatedUser.photos.length > 0
        ) {

            await userRepository.setPrimaryPhoto(
                userId,
                updatedUser.photos[0].publicId
            );

            return await userRepository.findById(userId);

        }
    }

    // 7. Otherwise, return the updated user
    async setPrimaryPhoto(userId, publicId) {

        // 1. Check user exists
        const user = await userRepository.findById(userId);

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        // 2. Check photo exists
        const photo = user.photos.find(
            p => p.publicId === publicId
        );

        if (!photo) {
            throw new ApiError(404, "Photo not found");
        }

        // 3. Remove primary flag from all photos
        await userRepository.clearPrimaryPhotos(userId);

        // 4. Make selected photo primary
        await userRepository.setPrimaryPhoto(
            userId,
            publicId
        );

        // 5. Return updated user
        return await userRepository.findById(userId);

    }

    async uploadProfilePhoto(userId, file) {

        if (!file) {
            throw new ApiError(400, "Please upload an image");
        }

        const result = await uploadToCloudinary(file.buffer);

        const user = await userRepository.findById(userId);

        const photo = {
            url: result.secure_url,
            publicId: result.public_id,
            isPrimary: user.photos.length === 0,
        };

        return await userRepository.addPhoto(
            userId,
            photo
        );

    }

}

module.exports = new ProfileService();