const emailValidator = require('email-validator')

exports.validate = validate
function validate(email) {
    return emailValidator.validate(email)
}