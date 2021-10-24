const {StatusCodes} = require('http-status-codes')

class AuthenticateError extends Error {
    constructor(message) {
        super(message)
        this.errorMessage = message
        this.statusCode = StatusCodes.FORBIDDEN
    }
}

module.exports = AuthenticateError