const mongoose = require('mongoose')

const InfluencerSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    date: { type: Date },
    photo: { type: String },
    photoName: { type: String },
    phone: { type: String },
    instagramUser: { type: String, required: true },
    followersAmount: { type: Number, required: true },
    instagramUrl: { type: String },
    categories: { type: [String], required: true },
    bio: { type: String, required: true },
    disabled: {type: Boolean, default: false},
    currentContracts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contracts' }],
    pendingContracts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contracts' }],
    Notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notifications' }],
    clickedCollaborations: [{ type: mongoose.Schema.Types.ObjectId }], // todo: check if working without ref
    unseenNotification: {type: Number, default: 0}

})

InfluencerSchema.index({
    email: 'text',
    phone: 'text',
    firstName: 'text',
    lastName: 'text',
    instagramUser: 'text',
    categories: 'text',
    instagramUrl: 'text',
    bio: 'text'});


const model = mongoose.model('Influencers', InfluencerSchema)
module.exports = model