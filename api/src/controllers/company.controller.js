const { Request, Response } = require('express')
const Company = require('../classes/Company')
const companyService = require('../service/company.service')
const {StatusCodes} = require('http-status-codes')

class CompanyController {
    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async getCompanies(req, res) {
        const companies = await companyService.getCompanies()
        res.json(companies)
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async getCompany(req, res) {
        const _id = req.params.id
        const company = await companyService.getCompany(_id)

        res.json(company)
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async createCompany(req, res, next) {
        try {
            const company = new Company(req.body)
            const companyResp = await companyService.createCompany(company)
    
            return res.json(companyResp)
        } catch(e) {
            return next(e)
        }
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async updateCompany(req, res, next) {
        try {
            const company = new Company(req.body)
            const companyResp = await companyService.updateCompany(company)
    
            return res.json(companyResp)
        } catch(e) {
            return next(e)
        }
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async deleteCompany(req, res) {
        const _id = req.params.id
        await companyService.deleteCompany(_id)

        res.status(StatusCodes.NO_CONTENT).send()
    }
}

module.exports = new CompanyController()
