const User = require("../models/User");

class UserRepository {

    async create(userData) {

        return await User.create(userData);

    }

    async findById(userId) {

        return await User.findById(userId);

    }

    async findByEmail(email) {

        return await User
            .findOne({ email })
            .select("+password");

    }

    async findByUsername(username) {

        return await User.findOne({ username });

    }

    async getProfile(userId) {

        return await User.findById(userId);

    }

    async updateProfile(userId, updateData) {

        return await User.findByIdAndUpdate(

            userId,

            updateData,

            {
                new: true,
                runValidators: true,
            }

        );

    }

    async updateActivePurpose(userId, activePurpose) {

        return await User.findByIdAndUpdate(

            userId,

            {
                activePurpose,
            },

            {
                new: true,
            }

        );

    }

    async updateEnabledPurposes(userId, enabledPurposes) {

        return await User.findByIdAndUpdate(

            userId,

            {
                enabledPurposes,
            },

            {
                new: true,
            }

        );

    }

    async updateLastLogin(userId) {

        return await User.findByIdAndUpdate(

            userId,

            {
                lastLogin: new Date(),
            }

        );

    }

    async updateOnlineStatus(userId, isOnline) {

        return await User.findByIdAndUpdate(

            userId,

            {
                isOnline,
                lastSeen: new Date(),
            }

        );

    }

}

module.exports = new UserRepository();