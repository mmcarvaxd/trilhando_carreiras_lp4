const { Router } = require('express')
const app = Router()
const userController = require('../controllers/user.controller')
const userMiddleware = require('../middlewares/user.middleware')

const UserController = userController

class UserRouter {
    getRoutes() {
        app.get('/', (req, res) => UserController.getUsers(req, res))
        app.get('/:id', (req, res) => UserController.getUser(req, res))
        app.post('/', (req, res, next) => UserController.createUser(req, res, next))
        app.put('/', (req, res, next) => UserController.updateUser(req, res, next))
        app.delete('/:id', (req, res) => UserController.deleteUser(req, res))

        app.use((req, res, next) => userMiddleware(req, res, next))
        //apply and revoke a job
        app.post('/job/:id', (req, res) => UserController.applyJob(req, res))
        app.delete('/job/:id', (req, res) => UserController.revokeJob(req, res))

        return app
    }
}

module.exports = new UserRouter()