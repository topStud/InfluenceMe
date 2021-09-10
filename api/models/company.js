const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    name: { type: String, required: true },
    siteUrl: { type: String },
    photo: { type: String },
    photoName: { type: String },
    phone: { type: String },
    bio: { type: String },
    disabled: {type: Boolean, default: false},
    CollaborationProposals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collaborations' }],
    Contracts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contracts' }],
    Notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notifications' }],
    unseenNotification: {type: Number, default: 0}
})

const model = mongoose.model('Companies', CompanySchema)
module.exports = model