const tokenUtil = require('../Util/token.util')
const { Request, Response } = require('express')
const { StatusCodes } = require('http-status-codes')
const companyService = require('../service/company.service')

/**
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @param {Function} next Express Next
 */
async function verifyCompanyToken(req, res, next) {
    let token = req.token

    if (!token) {
        return res.status(StatusCodes.FORBIDDEN).json({ message: 'Token was not sent' })
    }

    try {
        let payload = tokenUtil.decodeCompanyJWT(token)
        let company = await companyService.getCompany(payload._id)

        if (!company) {
            return res.status(StatusCodes.FORBIDDEN).json({ message: 'Invalid Token' })
        }

        req.company = company._doc

        return next()
    } catch (error) {
        return res.status(StatusCodes.FORBIDDEN).json({ message: 'Invalid Token' })
    }
}

module.exports = verifyCompanyToken