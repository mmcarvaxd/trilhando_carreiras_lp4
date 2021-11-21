class SubjectLevel {
    static subjectEnum = Object.freeze({
        novice: 'novice',
        intermediate: 'intermediate', 
        advanced: 'advanced'
    })

    static getEnum() {
        return this.subjectEnum
    }

    static getEnumArray() {
        let resp = []
        let keys = Object.keys(this.subjectEnum)

        keys.forEach(key => {
            resp.push(this.subjectEnum[key])
        })

        return resp
    }
}

module.exports = SubjectLevel