const {StatusCodes} = require('http-status-codes')

class InvalidField extends Error {
    constructor({message, field, object}) {
        super(message)

        this.field = field
        this.object = object
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = InvalidField