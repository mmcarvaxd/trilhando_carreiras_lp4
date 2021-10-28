const { Request, Response } = require('express')
const Auth = require('../classes/Auth')
const User = require('../classes/User')
const authService = require('../service/authenticate.service')

class AuthenticateController {
    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
     async authCompany(req, res, next) {
        try {
            const auth = new Auth(req.body)
            let resp = await authService.authCompany(auth)
    
            return res.set({'token': resp.jwt}).json(resp.company)
        } catch(e) {
            return next(e)
        }
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
     async authUser(req, res, next) {
        try {
            const user = new User(req.body)
            const userResp = await authService.authUser(user)
    
            return res.set({'token': userResp.jwt}).json(userResp.user)
        } catch(e) {
            return next(e)
        }
    }


}

module.exports = new AuthenticateController()
