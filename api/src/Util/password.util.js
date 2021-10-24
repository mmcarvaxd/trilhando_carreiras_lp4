const bcrypt = require('bcrypt')

exports.hash = hash
exports.validate = validate

function hash(password) {
    let hash = bcrypt.hashSync(password, 10)

    return hash
}

function validate(password, hash) {
    let isValid = bcrypt.compareSync(password, hash)

    return isValid
}