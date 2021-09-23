const { Router } = require('express')
const app = Router()
const companyController = require('../controllers/company.controller')

const CompanyController = companyController

class CompanyRouter {
    getRoutes() {
        app.get('/', (req, res) => CompanyController.getCompanies(req, res))
        app.get('/:id', (req, res) => CompanyController.getCompany(req, res))
        app.post('/', (req, res, next) => CompanyController.createCompany(req, res, next))
        app.put('/', (req, res, next) => CompanyController.updateCompany(req, res, next))
        app.delete('/:id', (req, res) => CompanyController.deleteCompany(req, res))

        return app
    }
}

module.exports = new CompanyRouter()