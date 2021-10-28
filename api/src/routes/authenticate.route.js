const { Router } = require('express')
const app = Router()
const AuthController = require('../controllers/authenticate.controller')


class CompanyRouter {
    getRoutes() {
        app.post('/company', (req, res, next) => AuthController.authCompany(req, res, next))
        app.post('/user', (req, res, next) => AuthController.authUser(req, res, next))

        return app
    }
}

module.exports = new CompanyRouter()