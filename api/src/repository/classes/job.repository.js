const { job: jobRepository } = require('../implementations/mongo')

class JobRepository {
    async getJobs(filter) {
        if(!filter) {
            filter = {}
        }

        const jobs = await jobRepository.find(filter)

        return jobs
    }

    async getJob(id) {
        const job = await jobRepository.findOne({
            _id: id
        })

        return job
    }

    async createJob(job) {
        const jobResp = await jobRepository.create(job)

        return jobResp
    }

    async updateJob(job) {
        const jobResp = await jobRepository.updateOne({_id: job._id}, job)

        return jobResp
    }

    async deleteJob(id) {
        const job = await jobRepository.deleteOne({_id: id})

        return job
    }
}

module.exports = new JobRepository()