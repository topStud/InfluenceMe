const companyModel = require('../models/company')
const notificationModel = require('../models/notification')
const influencerModel = require('../models/influencer')

const sendNotification = async (req, res) => {
    // The receiver is a company and the sender is an influencer
    if (req.body.messageType === 1 || req.body.messageType === 3){
        await companyModel.
        findOne({ _id: req.body.receiverID }, async (err, company) => {
            if (err || company === null){
                return res.status(400).json({status: 'error', 'error': 'company not exist'})
            }
            await createNotificationTo(company, req, res)
        })
    }
    // The receiver is an influencer and the sender is a company
    if (req.body.messageType === 2){
        await influencerModel.
        findOne({ _id: req.body.receiverID }, async (err, influencer) => {
            if (err || influencer === null){
                return res.status(400).json({status: 'error', 'error': 'influencer not exist'})
            }
            await createNotificationTo(influencer, req, res)
        })
    }
}

async function createNotificationTo(user, req, res) {
    await notificationModel.create({
        senderID: req.body.senderID,
        itemID: req.body.itemID,
        messageType: req.body.messageType
    }).then((notification) => {
        user.Notifications.push(notification)
        user.save().catch((err) => {
            return res.status(500).json({status: 'error', 'error': 'could not save'})
        })
        res.json({status: 'ok'})
    }).catch((err) => {
        if (err.code === 11000) {
            return res.status(400).json({status: 'error', 'error': 'the notification already exists'})
        }
        return res.status(500).json({status: 'error', 'error': 'could not save'})
    })
}


const notificationsOf = async (req, res) => {
    const userID = req.params.id
    await companyModel.
    findOne({ _id: userID}, async (err, company) => {
        if (err || company === null){
            await influencerModel.
            findOne({ _id: userID}, async (err, influencer) => {
                if (err || influencer === null){
                    return res.status(400).json({status: 'error', 'error': 'user not exist'})
                }
                // return influencer's notifications
                await findNotificationsOf(influencer, req, res)
            })
        }
        // return company's notifications
        await findNotificationsOf(company, req, res)
    })
}

async function findNotificationsOf(user, req, res) {
    notificationModel.find({
        '_id': { $in: user.Notifications}
    }, function(err, response){
        if (err || user === null){
            return res.status(400).json({status: 'error', 'error': 'can\'t find'})
        }
        return res.status(200).json({response})
    })
}


const updateSeen = async (req, res) => {
    await notificationModel.
    findOne({ _id: req.params.id}, async (err, notification) => {
        if (err || notification === null){
            return res.status(400).json({status: 'error', 'error': 'notification not exist'})
        }
        // change seen field from false to true
        notification.seen = true
        notification.save().catch((err) => {
            return res.status(500).json({status: 'error', 'error': 'could not save notification'})
        })
        return res.json({status: 'ok'})
    })
}




module.exports = {
    sendNotification,
    notificationsOf,
    updateSeen
}