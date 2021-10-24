const InvalidField = require("../Errors/invalidField.error")
const passwordUtil = require("../Util/password.util")
const emailUtil = require("../Util/email.util")
const tokenUtil = require("../Util/token.util")

class Company {
    constructor({ _id, name, description, companyRegister, headquarter, businessField, logo, email, password, token }) {
        this._id = _id
        this.name = name
        this.description = description
        this.token = token
        this.companyRegister = companyRegister
        this.headquarter = headquarter //TODO - Validate headquarter
        this.businessField = businessField
        this.email = email
        this.password = password
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

    validatePassword() {
        if (!this.password) {
            throw new InvalidField({ message: "Password not sent", field: "password", object: "Company" })
        }

        if(this.password.length < 6) {
            throw new InvalidField({ message: "Password too short", field: "password", object: "Company" })
        }
    }

    validateEmail() {
        if (!this.email) {
            throw new InvalidField({ message: "Email not sent", field: "email", object: "Company" })
        }

        const isValid = emailUtil.validate(this.email)
        
        if(!isValid) {
            throw new InvalidField({ message: "Invalid email", field: "email", object: "Company" })
        }
    }

    hashPassword() {
        this.passwordHash = passwordUtil.hash(this.password)
    }

    login(password) {
        return passwordUtil.validate(password, this.hashPassword)
    }
}

module.exports = Company