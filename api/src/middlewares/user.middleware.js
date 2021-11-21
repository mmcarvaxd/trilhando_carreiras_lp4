const tokenUtil = require('../Util/token.util')
const { Request, Response } = require('express')
const { StatusCodes } = require('http-status-codes')
const userService = require('../service/user.service')

/**
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @param {Function} next Express Next
 */
async function verifyUserToken(req, res, next) {
    let token = req.headers.token

    if (!token) {
        return res.status(StatusCodes.FORBIDDEN).json({ message: 'Token was not sent' })
    }
    try {
        let payload = tokenUtil.decodeUserJWT(token)
        let user = await userService.getUser(payload._id)

        if(!user) {
            return res.status(StatusCodes.FORBIDDEN).json({ message: 'Invalid Token' })
        }

        req.user = user._doc

        return next()
    } catch (error) {
        return res.status(StatusCodes.FORBIDDEN).json({ message: 'Invalid Token' })
    }
}

module.exports = verifyUserToken