const { user: userRepository } = require('../implementations/mongo')

class UserRepository {
    async getUsers(filter) {
        if(!filter) {
            filter = {}
        }

        const users = await userRepository.find(filter)

        return users
    }

    async getUserByEmail(email) {
        let filter = {
            email
        }

        const user = await userRepository.findOne(filter)

        return user
    }

    async getUser(id) {
        const user = await userRepository.findOne({
            _id: id
        })

        return user
    }

    async createUser(user) {
        const userResp = await userRepository.create(user)

        return userResp
    }

    async updateToken(_id, token) {
        const userResp = await userRepository.updateOne({_id}, {token})

        return userResp
    }

    async updateUser(user) {
        const userResp = await userRepository.updateOne({_id: user._id}, user)

        return userResp
    }

    async deleteUser(id) {
        const user = await userRepository.deleteOne({_id: id})

        return user
    }

    async addAppliedJob(user_id, job_id) {
        const user = await userRepository.updateOne({_id: user_id}, {
            $push: {
                appliedJobs: job_id
            }
        })

        return user
    }
}

module.exports = new UserRepository()