const { subject: subjectRepository } = require('../implementations/mongo')

class SubjectRepository {
    async getSubjects() {
        const subjects = await subjectRepository.find()

        return subjects
    }

    async createSubject(subject) {
        const subjectResp = await subjectRepository.create(subject)

        return subjectResp
    }
}

module.exports = new SubjectRepository()