const { Router } = require('express')
const app = Router()
const subjectController = require('../controllers/subject.controller')

const SubjectController = subjectController

class SubjectRouter {
    getRoutes() {
        app.get('/', (req, res) => SubjectController.getSubjects(req, res))
        app.post('/', (req, res) => SubjectController.createSubject(req, res))

        return app
    }
}

module.exports = new SubjectRouter()