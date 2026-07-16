const userRepository = require("../repositories/UserRepository");

class UserService {

    async getUsers(currentUserId) {

        return await userRepository.getUsers(
            currentUserId
        );

    }

}

module.exports = new UserService();