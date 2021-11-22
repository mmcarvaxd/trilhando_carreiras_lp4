const userRepository = require('../repository/classes/user.repository')
const jobService = require('./job.service')
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


    async applyJob(user_id, job_id) {
        try {
            await jobService.addCandidate(user_id, job_id)
            await userRepository.addAppliedJob(user_id, job_id)
        } catch (error) { }

        return
    }

    async revokeJob(user_id, job_id) {
        try {
            await jobService.removeCandidate(user_id, job_id)
            await userRepository.removeAppliedJob(user_id, job_id)
        } catch (error) {
            console.log(error)
         }

        return
    }
}

module.exports = new UserService()
