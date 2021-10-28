const { Request, Response } = require('express')
const User = require('../classes/User')
const userService = require('../service/user.service')
const { StatusCodes } = require('http-status-codes')

class UserController {
    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async getUsers(req, res) {
        const users = await userService.getUsers()
        res.json(users)
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async getUser(req, res) {
        const _id = req.params.id
        const user = await userService.getUser(_id)

        res.json(user)
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async createUser(req, res, next) {
        try {
            const user = new User(req.body)
            const userResp = await userService.createUser(user)
    
            return res.json(userResp)
        } catch(e) {
            return next(e)
        }
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async updateUser(req, res, next) {
        try {
            const user = new User(req.body)
            const userResp = await userService.updateUser(user)
    
            return res.json(userResp)
        } catch(e) {
            return next(e)
        }
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async deleteUser(req, res) {
        const _id = req.params.id
        await userService.deleteUser(_id)

        res.status(StatusCodes.NO_CONTENT).send()
    }
}

module.exports = new UserController()
