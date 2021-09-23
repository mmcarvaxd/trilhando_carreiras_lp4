const JobLevelEnum = require("../enums/jobLevel.enum")
const InvalidField = require("../Errors/invalidField.error")

class Job {
    constructor({ _id, name, description, requirements, salary, level, workingTime, quantitiesCandidates,companyId }) {
        this._id = _id
        this.name = name
        this.description = description
        this.requirements = requirements
        this.salary = salary ? Number(salary) : null //TODO - Validate headquarter
        this.level = level
        this.workingTime = workingTime
        this.quantitiesCandidates = quantitiesCandidates ? Number(quantitiesCandidates) : 0
        this.companyId = companyId
    }

    validateName() {
        if (!this.name) {
            throw InvalidField({ message: "Job name was not sent", field: "name", object: "Job" })
        }
        
        if (this.name.length < 2) {
            throw InvalidField({ message: "Job name needs to be more then 2 characters", field: "name", object: "Company" })
        }
    }

    validateDescription() {
        if (this.description) {
            if (this.description.length > 500) {
                throw new InvalidField({ message: "Job description cannot have more then 500 characters", field: "description", object: "Job" })
            }
        }
    }

    validateRequirements() {
        if (!this.requirements) {
            throw new InvalidField({ message: "Job requirements was not sent", field: "requirements", object: "Job" })
        }

        if (!Array.isArray(this.requirements)) {
            throw new InvalidField({ message: "Job requirements was invalid", field: "requirements", object: "Job" })
        }

        if (this.requirements.length < 2) {
            throw new InvalidField({ message: "Job requirements was invalid", field: "requirements", object: "Job" })
        }
    }

    validateSalary() {
        if (this.salary) {
            if(Number.isNaN(this.salary)) {
                throw new InvalidField({ message: "Job Salary Field was not sent", field: "salary", object: "Job" })
            }
        }
    }

    validateWorkingTime() {
        let values = JobLevelEnum.getEnumArray()

        if(!values.includes(this.workingTime)) {
            throw new InvalidField({ message: "Job Working Time Field was not sent", field: "workingTime", object: "Job" })
        }
    }

    validateLevel() {
        let values = JobLevelEnum.getEnumArray()

        if(!values.includes(this.level)) {
            throw new InvalidField({ message: "Job Level Field was not sent", field: "level", object: "Job" })
        }
    }

    validateQuantitiesCandidates() {
        if(this.quantitiesCandidates < 0) {
            throw new InvalidField({ message: "Job Quantities Candidates was not sent", field: "quantitiesCandidates", object: "Job" })
        }
    }

    validateCompany() {
        if(!this.companyId) {
            throw new InvalidField({ message: "Job Company was not sent", field: "companyId", object: "Job" })
        }
    }

    validateAll() {
        this.validateName()
        this.validateDescription()
        this.validateRequirements()
        this.validateSalary()
        this.validateWorkingTime()
        this.validateLevel()
        this.validateQuantitiesCandidates()
        this.validateCompany()
    }
}

module.exports = Job