const jobRepository = require('../repository/classes/job.repository')
const Job = require('../classes/Job')

class JobService {
    async getJobs() { 
        const jobs = await jobRepository.getJobs()

        return jobs
    }

    /**
     * @param {Number} id Job id
     */
     async getJob(id) {
        const job = await jobRepository.getJob(id)
        
        return job
     }

    /**
     * @param {Job} job Job
     */
     async createJob(job) { 
        job.validateAll()

        delete job._id 

        const jobResponse = await jobRepository.createJob(job)

        return jobResponse
    }

    /**
     * @param {Job} job Job
     */
     async updateJob(job) {
        job.validateAll()

        const jobResponse = await jobRepository.updateJob(job)

        return jobResponse
    }

    /**
     * @param {Number} id Job id
     */
    async deleteJob(id) {
        await jobRepository.deleteJob(id)
        return
    }

    async addCandidate(user_id, job_id) {
        await jobRepository.addCandidate(user_id, job_id)
        return
    }
}

module.exports = new JobService()
