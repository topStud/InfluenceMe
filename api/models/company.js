const mongoose = require('mongoose')

//todo: change the fields
const CompanySchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    name: { type: String, required: true },
    photo: { type: Buffer },
    bio: { type: String }
})

const model = mongoose.model('CompanySchema', CompanySchema)
module.exports = model