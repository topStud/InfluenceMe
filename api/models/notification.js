const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
    senderID:{ type: String, required: true },
    receiverID:{ type: String, required: true },
    itemID:{ type: String, required: true },
    messageType:{ type: Number, required: true },
    message : { type : String, required: true },
    createdAt : { type : Date, default: Date.now },
    seen:{ type: Boolean, default: false },
    photo:{ type: String }
})

NotificationSchema.index({senderID: 1, itemID: 1, messageType: 1}, {unique: true})


const model = mongoose.model('Notifications', NotificationSchema)
module.exports = model