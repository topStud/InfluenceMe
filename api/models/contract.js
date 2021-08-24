const mongoose = require('mongoose')

const ContractSchema = new mongoose.Schema({
    companyID: { type: String, required: true },
    title: {type: String, required: true, unique: true, index:true },
    isApproved: {type: Boolean, default: false }, // to know if it got approved
    companyName: {type: String, required: true},
    companyPhone: { type: String },
    companyEmail: { type: String, required: true },
    influencerName: { type: String, required: true, unique:true, index:true},
    influencerPhone:{ type: String },
    infliencerEmail:{ type: String, required: true },
    categories: { type: Array, required: true },
    details: { type: String, required: true },
    payment: {type: String},
    startDay:{type: Date, default: Date.now}, // need to know the time it working
    endDay:{type: Date} // end time - when to remove the contract
})

const model = mongoose.model('Contracts', ContractSchema)
module.exports = model