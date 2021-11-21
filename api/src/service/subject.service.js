const subjectRepository = require('../repository/classes/subject.repository')

class SubjectService {
    async getSubjects() {
        const subjects = await subjectRepository.getSubjects()

        return subjects
    }

    async createSubject(subject) {
        delete subject._id

        const subjectResponse = await subjectRepository.createSubject(subject)

        return subjectResponse
    }
}

module.exports = new SubjectService()
