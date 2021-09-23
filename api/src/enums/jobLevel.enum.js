class JobLevel {
    static jobEnum = Object.freeze({
        assistant: 'assistant',
        internship: 'internship', 
        junior: 'junior', 
        mid: 'mid', 
        senior: 'senior'
    })

    static getEnum() {
        return this.jobEnum
    }

    static getEnumArray() {
        let resp = []
        let keys = Object.keys(this.jobEnum)

        keys.forEach(key => {
            resp.push(this.jobEnum[key])
        })

        return resp
    }
}

module.exports = JobLevel