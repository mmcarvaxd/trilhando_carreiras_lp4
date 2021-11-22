const InvalidField = require("../Errors/invalidField.error")
const passwordUtil = require("../Util/password.util")
const emailUtil = require("../Util/email.util")

class User {
    constructor({ _id, name, address, picture, email, password, token, passwordHash, interests, cv, appliedJobs }) {
        this._id = _id
        this.name = name
        this.address = address
        this.token = token
        this.email = email
        this.password = password
        this.passwordHash = passwordHash
        this.picture = picture
        this.interests = interests
        this.appliedJobs = appliedJobs
        this.cv = cv
    }

    validateName() {
        if (!this.name) {
            throw InvalidField({ message: "User name was not sent", field: "name", object: "User" })
        }
        
        if (this.name.length < 2) {
            throw InvalidField({ message: "User name needs to be more then 2 characters", field: "name", object: "User" })
        }
    }

    validatePassword() {
        if (!this.password) {
            throw new InvalidField({ message: "Password not sent", field: "password", object: "User" })
        }

        if(this.password.length < 6) {
            throw new InvalidField({ message: "Password too short", field: "password", object: "User" })
        }
    }

    validateEmail() {
        if (!this.email) {
            throw new InvalidField({ message: "Email not sent", field: "email", object: "User" })
        }

        const isValid = emailUtil.validate(this.email)
        
        if(!isValid) {
            throw new InvalidField({ message: "Invalid email", field: "email", object: "User" })
        }
    }

    hashPassword() {
        this.passwordHash = passwordUtil.hash(this.password)
    }

    login(password) {
        return passwordUtil.validate(password, this.passwordHash)
    }
}

module.exports = User