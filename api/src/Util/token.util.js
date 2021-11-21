const rs = require('randomstring')
const jwt = require('jsonwebtoken');
const config = require('../config/environment.config')

exports.createRandomStringForToken = createRandomStringForToken
exports.generateCompanyJWT = generateCompanyJWT
exports.generateUserJWT = generateUserJWT
exports.decodeCompanyJWT = decodeCompanyJWT
exports.decodeUserJWT = decodeUserJWT

function createRandomStringForToken(size = 20) {
    return rs.generate(size)
}

function generateCompanyJWT(company, string) {
    return jwt.sign({token: string, _id: company._id}, config.COMPANY_TOKEN_SECRET, {
        expiresIn: config.COMPANY_TOKEN_EXPIRESIN
    })
}

function decodeCompanyJWT(token) {
    return jwt.decode(token, config.COMPANY_TOKEN_EXPIRESIN)
}

function decodeUserJWT(token) {
    return jwt.decode(token, config.USER_TOKEN_SECRET)
}

function generateUserJWT(user, string) {
    return jwt.sign({token: string, _id: user._id}, config.USER_TOKEN_SECRET, {
        expiresIn: config.USER_TOKEN_EXPIRESIN
    })
}


