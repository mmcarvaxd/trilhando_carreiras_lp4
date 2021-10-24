class Auth {
    constructor({email, password}) {
        this.email = email
        this.password = password
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
}