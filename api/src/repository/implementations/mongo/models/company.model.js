const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
    _id: { 
        type: Schema.Types.ObjectId, 
        auto: true 
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    companyRegister: {
        type: String,
        required: true
    },
    headquarter: {
        type: String,
        required: true
    },
    businessField: {
        type: String,
        required: true
    },
    logo: {
        type: Schema.Types.Buffer
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    passwordHash: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('companies', schema, 'companies')
