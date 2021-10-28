const userRepository = require('../repository/classes/user.repository')
const User = require('../classes/User')

class UserService {
    async getUsers() { 
        const users = await userRepository.getUsers()

        return users
    }

    /**
     * @param {Number} id User id
     */
     async getUser(id) {
        const user = await userRepository.getUser(id)
        
        return user
     }

    /**
     * @param {User} user User
     */
     async createUser(user) { 
        user.validateName()
        user.validateEmail()
        user.validatePassword()
        user.hashPassword()
        
        delete user._id 

        const userResponse = await userRepository.createUser(user)

        return userResponse
    }

    /**
     * @param {User} user User
     */
     async updateUser(user) {
        user.validateName()
        user.validateEmail()
        user.validatePassword()
        user.hashPassword()

        const userResponse = await userRepository.updateUser(user)

        return userResponse
    }

    /**
     * @param {Number} id User id
     */
    async deleteUser(id) {
        await userRepository.deleteUser(id)
        return
    }
}

module.exports = new UserService()
