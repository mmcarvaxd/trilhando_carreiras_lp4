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
    address: {
        type: String,
        required: true
    },
    picture: {
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
    },
    cv: {
        type: Schema.Types.Buffer
    },
    interests: {
        type: [Schema.Types.ObjectId]
    },
    appliedJobs: {
        type: [Schema.Types.ObjectId]
    }
})

module.exports = mongoose.model('users', schema, 'users')
