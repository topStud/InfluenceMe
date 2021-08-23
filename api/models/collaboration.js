const mongoose = require('mongoose')

const CollaborationSchema = new mongoose.Schema({
    companyID: { type: String, required: true },
    title: {type: String, required: true, unique: true},
    phone: { type: String },
    email: { type: String },
    categories: { type: Array, required: true },
    collaborationsNumber: {type: Number},
    description: { type: String , required: true},
    requirements: {type: String }
})

const model = mongoose.model('Collaborations', CollaborationSchema)
module.exports = model