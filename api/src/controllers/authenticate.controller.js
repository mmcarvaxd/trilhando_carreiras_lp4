const { Request, Response } = require('express')
const Auth = require('../classes/Auth')
const authService = require('../service/authenticate.service')

class AuthenticateController {
    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
     async authCompany(req, res, next) {
        try {
            console.log("aqui")
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
    //  async authCompany(req, res, next) {
    //     try {
    //         const company = new Company(req.body)
    //         const companyResp = await companyService.createCompany(company)
    
    //         return res.json(companyResp)
    //     } catch(e) {
    //         return next(e)
    //     }
    // }


}

module.exports = new AuthenticateController()
