const bcrypt = require("bcryptjs");

const userRepository = require("../repositories/UserRepository");
const ApiError = require("../utils/ApiError");
const generateToken = require("../utils/generateToken");

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

    async login(loginData) {

        const { email, password } = loginData;

        const user = await userRepository.findByEmail(email);

        if (!user) {
            throw new ApiError(401, "Invalid email or password");
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            throw new ApiError(401, "Invalid email or password");
        }

        const token = generateToken(user._id);

        user.password = undefined;

        return {
            user,
            token
        };
    }

    async getCurrentUser(userId) {

        const user = await userRepository.findById(userId);

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        return user;
    }
}

module.exports = new AuthService();