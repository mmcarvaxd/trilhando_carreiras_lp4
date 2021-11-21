const { Request, Response } = require('express')
const subjectService = require('../service/subject.service')
const Subject = require('../classes/Subject')

class SubjectController {
    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async getSubjects(req, res) {
        const subjects = await subjectService.getSubjects()
        res.json(subjects)
    }

    /**
     * @param {Request} req Express Request
     * @param {Response} res Express Response
     */
    async createSubject(req, res, next) {
        try {
            const subject = new Subject(req.body)
            const subjectResp = await subjectService.createSubject(subject)
    
            return res.json(subjectResp)
        } catch(e) {
            return next(e)
        }
    }
}

module.exports = new SubjectController()
