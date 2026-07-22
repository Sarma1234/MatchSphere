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
    async updateLastSeen(userId) {

    return await User.findByIdAndUpdate(

        userId,

        {
            lastSeen: new Date(),
        }

    );

}
    /* ---------------------------------------------------------------------- */
/*                           Settings Methods                             */
/* ---------------------------------------------------------------------- */

async getSettings(userId) {

    return await User.findById(userId)
        .select("settings");

}

async updateAppearance(userId, appearance) {

    console.log("Repository Appearance:", appearance);

    return await User.findByIdAndUpdate(
        userId,
        {
            $set: {
                "settings.appearance": appearance,
            },
        },
        {
            new: true,
            runValidators: true,
        }
    );

}

async updateNotifications(userId, notifications) {

    return await User.findByIdAndUpdate(

        userId,

        {
            "settings.notifications": notifications,
        },

        {
            new: true,
            runValidators: true,
        }

    );

}

async updateSecurity(userId, security) {

    return await User.findByIdAndUpdate(

        userId,

        {
            "settings.security": security,
        },

        {
            new: true,
            runValidators: true,
        }

    );

}

async findByIdWithPassword(userId) {

    return await User
        .findById(userId)
        .select("+password");

}

async deleteUser(userId) {

    return await User.findByIdAndDelete(userId);

}

async existsByEmail(email, excludeUserId = null) {

    const query = {
        email,
    };

    if (excludeUserId) {

        query._id = {
            $ne: excludeUserId,
        };

    }

    return await User.exists(query);

}

async existsByUsername(username, excludeUserId = null) {

    const query = {
        username,
    };

    if (excludeUserId) {

        query._id = {
            $ne: excludeUserId,
        };

    }

    return await User.exists(query);

}
}

module.exports = new UserRepository();