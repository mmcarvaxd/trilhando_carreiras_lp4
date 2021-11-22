const { job: jobRepository } = require('../implementations/mongo')

class JobRepository {
    async getJobs(filter) {
        if (!filter) {
            filter = {}
        }

        const jobs = await jobRepository.find(filter).populate({
            path: 'companyId'
        }).populate({
            path: 'candidatesId'
        })

        return jobs
    }

    async getJob(id) {
        const job = await jobRepository.findOne({
            _id: id
        }).populate({
            path: 'companyId'
        }).populate({
            path: 'candidatesId'
        })

        return job
    }

    async createJob(job) {
        const jobResp = await jobRepository.create(job)

        return jobResp
    }

    async updateJob(job) {
        const jobResp = await jobRepository.updateOne({ _id: job._id }, job)

        return jobResp
    }

    async deleteJob(id) {
        const job = await jobRepository.deleteOne({ _id: id })

        return job
    }

    async addCandidate(user_id, job_id) {
        const job = await jobRepository.updateOne({ _id: job_id }, {
            $push: {
                candidatesId: user_id
            }
        })

        return job
    }

    async revokeCandidate(user_id, job_id) {
        const job = await jobRepository.updateOne({ _id: job_id }, {
            $pullAll: {
                candidatesId: [user_id]
            }
        })

        return job
    }
}

module.exports = new JobRepository()