const mongoose = require('mongoose')

const CollaborationSchema = new mongoose.Schema({
    companyID: { type: String, required: true },
    title: {type: String, required: true, unique: true},
    phone: { type: String },
    email: { type: String },
    categories: { type: [String], required: true },
    collaborationsNumber: {type: Number},
    disabled: {type: Boolean, default: false},
    canEdit: {type: Boolean, default: true},
    description: { type: String , required: true},
    requirements: {type: String }
})

CollaborationSchema.index({
    title: 'text',
    categories: 'text',
    description: 'text',
    requirements: 'text'});

const model = mongoose.model('Collaborations', CollaborationSchema)
module.exports = model