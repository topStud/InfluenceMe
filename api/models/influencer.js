const mongoose = require('mongoose')

const InfluencerSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    date: { type: Date },
    photo: { type: String },
    phone: { type: String },
    instagramUser: { type: String, required: true },
    followersAmount: { type: Number, required: true },
    instagramUrl: { type: String },
    categories: { type: Array, required: true },
    bio: { type: String }
})

const model = mongoose.model('Influencers', InfluencerSchema)
module.exports = model