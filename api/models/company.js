const mongoose = require('mongoose')
//const collaborationModel = require('collaboration')

//todo: change the fields
const CompanySchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    name: { type: String, required: true },
    siteUrl: { type: String },
    photo: { type: String },
    phone: { type: String },
    bio: { type: String },
    CollaborationProposals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collaborations' }]
})

const model = mongoose.model('Companies', CompanySchema)
module.exports = model