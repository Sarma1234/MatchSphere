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

    async deleteById(id) {
        return await User.findByIdAndDelete(id);
    }

}

module.exports = new UserRepository();