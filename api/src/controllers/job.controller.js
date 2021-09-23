const { Request, Response } = require('express')
const Job = require('../classes/Job')
const jobService = require('../service/job.service')
const { StatusCodes } = require('http-status-codes')

class JobController {
    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async getJobs(req, res) {
        const jobs = await jobService.getJobs()
        res.json(jobs)
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async getJob(req, res) {
        const _id = req.params.id
        const jobs = await jobService.getJob(_id)

        res.json(jobs)
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async createJob(req, res, next) {
        try {
            const job = new Job(req.body)
            const jobResp = await jobService.createJob(job)
    
            return res.json(jobResp)
        } catch(e) {
            return next(e)
        }
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async updateJob(req, res, next) {
        try {
            const job = new Job(req.body)
            const jobResp = await jobService.updateJob(job)
    
            return res.json(jobResp)
        } catch(e) {
            return next(e)
        }
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async deleteJob(req, res) {
        const _id = req.params.id
        await jobService.deleteJob(_id)

        res.status(StatusCodes.NO_CONTENT).send()
    }
}

module.exports = new JobController()
