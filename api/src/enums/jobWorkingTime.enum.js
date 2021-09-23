class JobLevelEnum {
    jobEnum = Object.freeze({
        part: 'part',
        full: 'full', 
        flexible: 'flexible', 
        internship: 'internship'
    })

    getEnum() {
        return this.jobEnum
    }

    getEnumArray() {
        let resp = []
        let keys = Object.keys(this.jobEnum)

        keys.forEach(key => {
            resp.push(this.jobEnum[key])
        })

        return resp
    }
}

module.exports = new JobLevelEnum()