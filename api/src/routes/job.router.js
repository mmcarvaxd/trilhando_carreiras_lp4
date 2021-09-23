const { Router } = require('express')
const app = Router()
const jobController = require('../controllers/job.controller')

const JobController = jobController

class JobRouter {
    getRoutes() {
        app.get('/', (req, res) => JobController.getJobs(req, res))
        app.get('/:id', (req, res) => JobController.getJob(req, res))
        app.post('/', (req, res, next) => JobController.createJob(req, res, next))
        app.put('/', (req, res, next) => JobController.updateJob(req, res, next))
        app.delete('/:id', (req, res) => JobController.deleteJob(req, res))

        return app
    }
}

module.exports = new JobRouter()