const mongoose = require('mongoose');
const config = require('../../../config/environment.config')

mongoose.connection.setMaxListeners(0)

mongoose.connect(config.MONGODB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(() => { console.error('Error connecting with mongodb server'); throw {message: 'Error connecting with mongodb server'}})


module.exports = {
    company: require('./models/company.model'),
    job: require('./models/job.model'),
    user: require('./models/user.model')
}

