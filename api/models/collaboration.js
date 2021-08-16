const mongoose = require('mongoose')

//todo: change the fields
const CollaborationSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    companyName: { type: String, required: true },
    photo: { type: String },
    phone: { type: String },
    categories: { type: Array, required: true },
    bio: { type: String }
})

const model = mongoose.model('Companies', CompanySchema)
module.exports = model