const mongoose = require("mongoose")

const tokenSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, required: true}, // todo: check if working without ref
    token: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, expires: 3600} // this is the expiry time in seconds
})


module.exports = mongoose.model("Token", tokenSchema);