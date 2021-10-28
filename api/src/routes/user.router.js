const { Router } = require('express')
const app = Router()
const userController = require('../controllers/user.controller')

const UserController = userController

class UserRouter {
    getRoutes() {
        app.get('/', (req, res) => UserController.getUsers(req, res))
        app.get('/:id', (req, res) => UserController.getUser(req, res))
        app.post('/', (req, res, next) => UserController.createUser(req, res, next))
        app.put('/', (req, res, next) => UserController.updateUser(req, res, next))
        app.delete('/:id', (req, res) => UserController.deleteUser(req, res))

        return app
    }
}

module.exports = new UserRouter()