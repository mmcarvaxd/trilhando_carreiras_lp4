require('dotenv').config()

module.exports = {
    MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL,
    PORT: process.env.PORT
}