const InvalidField = require("../Errors/invalidField.error")

class Company {
    constructor({ _id, name, description, companyRegister, headquarter, businessField, logo }) {
        this._id = _id
        this.name = name
        this.description = description
        this.companyRegister = companyRegister
        this.headquarter = headquarter //TODO - Validate headquarter
        this.businessField = businessField
        this.logo = logo
    }

    validateName() {
        if (!this.name) {
            throw InvalidField({ message: "Company name was not sent", field: "name", object: "Company" })
        }
        
        if (this.name.length < 2) {
            throw InvalidField({ message: "Company name needs to be more then 2 characters", field: "name", object: "Company" })
        }
    }

    validateDescription() {
        if (this.description) {
            if (this.description.length > 500) {
                throw new InvalidField({ message: "Company description cannot have more then 500 characters", field: "description", object: "Company" })
            }
        }
    }

    validateCompanyRegister() {
        if (!this.companyRegister) {
            throw new InvalidField({ message: "Company Register was not sent", field: "companyRegister", object: "Company" })
        }

        if (this.companyRegister.length < 2) {
            throw new InvalidField({ message: "Company Register was invalid", field: "companyRegister", object: "Company" })
        }
    }

    validateBusinessField() {
        if (!this.businessField) {
            throw new InvalidField({ message: "Company Business Field was not sent", field: "businessField", object: "Company" })
        }
    }

    static teste () {
        
    }
}

module.exports = Company