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
        type: String,
        required: true
    },
    requirements: {
        type: [String],
        required: true
    },
    salary: {
        type: Number
    },
    level: {
        type: String,
        enum: ['assistant', 'internship', 'junior', 'mid', 'senior'],
        required: true
    },
    workingTime: {
        type: String,
        enum: ['part', 'full', 'flexible', 'internship'],
        required: true
    },
    quantitiesCandidates: {
        type: Number,
        default: 0
    },
    companyId: { 
        type: Schema.Types.ObjectId,
        ref: 'companies'
    },
    status: {
        type: String,
        enum : ['openned','closed', 'finished'],
        default: 'openned',
        required: true
    },
    location: {
        type: String,
        enum : ['office','remote', 'hybrid'],
        default: 'office',
        required: true
    }
})

module.exports = mongoose.model('jobs', schema, 'jobs')
