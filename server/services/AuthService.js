const userRepository = require("../repositories/UserRepository");
const ApiError = require("../utils/ApiError");

class AuthService {
    async register(userData) {
        const existingEmail = await userRepository.findByEmail(userData.email);

        if (existingEmail) {
            throw new ApiError(409, "Email already exists");
        }

        const existingUsername = await userRepository.findByUsername(userData.username);

        if (existingUsername) {
            throw new ApiError(409, "Username already taken");
        }

        const user = await userRepository.create(userData);

        return user;
    }
}

module.exports = new AuthService();