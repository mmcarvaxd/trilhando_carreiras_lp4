require('dotenv').config()

module.exports = {
    MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL,
    PORT: process.env.PORT,
    COMPANY_TOKEN_SECRET: process.env.COMPANY_TOKEN_SECRET,
    COMPANY_TOKEN_EXPIRESIN: process.env.COMPANY_TOKEN_EXPIRESIN,
    USER_TOKEN_SECRET: process.env.USER_TOKEN_SECRET,
    USER_TOKEN_EXPIRESIN: process.env.USER_TOKEN_EXPIRESIN
}