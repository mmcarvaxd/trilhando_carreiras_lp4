const { Router } = require('express')
const app = Router()
const AuthController = require('../controllers/authenticate.controller')


class CompanyRouter {
    getRoutes() {
        app.post('/company', (req, res) => AuthController.authCompany(req, res))
        //app.post('/user', (req, res) => CompanyController.getCompany(req, res))

        return app
    }
}

module.exports = new CompanyRouter()