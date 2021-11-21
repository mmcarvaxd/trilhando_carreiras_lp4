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
})

module.exports = mongoose.model('subject', schema, 'subject')
