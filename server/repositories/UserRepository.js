const User = require("../models/User");

class UserRepository {

    async create(userData) {
        return await User.create(userData);
    }

    async findByEmail(email) {
        return await User.findOne({ email }).select("+password");
    }

    async findByUsername(username) {
        return await User.findOne({ username });
    }

    async findById(id) {
        return await User.findById(id);
    }

    async updateById(id, data) {
        return await User.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
                runValidators: true
            }
        );
    }
    async addPhoto(userId, photo) {

        return await User.findByIdAndUpdate(
            userId,
            {
                $push: {
                    photos: photo,
                },
            },
            {
                new: true,
                runValidators: true,
            }
        );

    }
    async removePhoto(userId, publicId) {

        return await User.findByIdAndUpdate(
            userId,
            {
                $pull: {
                    photos: {
                        publicId: publicId,
                    },
                },
            },
            {
                new: true,
            }
        );

    }
    async setPrimaryPhoto(userId, photoId) {

        return await User.findOneAndUpdate(
            {
                _id: userId,
                "photos.publicId": photoId
            },
            {
                $set: {
                    "photos.$.isPrimary": true
                }
            },
            {
                new: true
            }
        );

    }
    async clearPrimaryPhotos(userId) {

        return await User.updateOne(
            { _id: userId },
            {
                $set: {
                    "photos.$[].isPrimary": false
                }
            }
        );

    }
    async getUsers(currentUserId) {

        return await User.find({
            _id: { $ne: currentUserId },
            accountStatus: "active",
        })
            .select("-password")
            .sort({ createdAt: -1 });

    }
    async deleteById(id) {
        return await User.findByIdAndDelete(id);
    }

}

module.exports = new UserRepository();