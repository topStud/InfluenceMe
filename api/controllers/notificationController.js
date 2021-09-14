const companyModel = require('../models/company')
const notificationModel = require('../models/notification')
const influencerModel = require('../models/influencer')
const collaborationModel = require('../models/collaboration')
const contractModel = require('../models/contract')


const sendNotification = async (req, res) => {
    // The receiver is a company and the sender is an influencer
    if (req.body.messageType === 1 || req.body.messageType === 3){
        await companyModel.
        findOne({ _id: req.body.receiverID }, async (err, company) => {
            if (err || company === null){
                return res.status(400).json({status: 'error', 'error': 'company not exist'})
            }
            let message
            if(req.body.messageType === 1){
                message = req.body.senderName +
                    ' has sent a collaboration request for the proposal named ' + req.body.itemName
            } else{
                message = 'You and ' + req.body.senderName
                    + ' are now collaborating on '+ req.body.itemName
            }

            await createNotificationTo(company, req, res, message)

        })
    }
    // The receiver is an influencer and the sender is a company
    if (req.body.messageType === 2){
        await influencerModel.
        findOne({ _id: req.body.receiverID }, async (err, influencer) => {
            if (err || influencer === null){
                return res.status(400).json({status: 'error', 'error': 'influencer not exist'})
            }
            const message = req.body.senderName + ' has sent a contract for the '+ req.body.itemName + ' proposal'
            await createNotificationTo(influencer, req, res, message)
        })
    }
}

async function updateCanEdit(req, res) {
    await collaborationModel.
    findOne({ _id: req.body.itemID}, async (err, cp) => {
        if (err || cp === null){
            return res.status(400).json({status: 'error', 'error': 'collaboration proposal not exist'})
        }
        // change seen field from false to true
        cp.canEdit = false
        cp.save().catch((err) => {
            return res.status(500).json({status: 'error', 'error': 'could not save collaboration proposal'})
        })
        return res.json({status: 'ok'})
    })
}

async function createNotificationTo(user, req, res, message) {
    await notificationModel.create({
        senderID: req.body.senderID,
        itemID: req.body.itemID,
        messageType: req.body.messageType,
        message: message,
        createdAt: req.body.createdAt, // just in case
        seen:req.body.seen
    }).then(async (notification) => {
        user.Notifications.push(notification)
        user.save().catch((err) => {
            return res.status(500).json({status: 'error', 'error': 'could not save'})
        })

        // todo: check if working
        if(req.body.messageType === 3){
            // add 1 influencer to collaboration proposal that match to the contract of that notification
            await contractModel.
            findOne({ _id: req.body.itemID }, async (err, contract) => {
                if (err || contract === null){
                    return res.status(400).json({status: 'error', 'error': 'contract not exist'})
                }
                await collaborationModel.
                findOne({ title: contract.title }, async (err, cp) => {
                    if (cp !== null){
                        cp.collaborationsNumber++
                        cp.save().catch((err) => {
                            return res.status(500).json({status: 'error', 'error': 'could not save collaboration proposal'})
                        })
                        return res.json({status: 'ok'})
                    }
                })
            })

            //move contract from pending to current
            companyModel.findOneAndUpdate({_id: req.body.receiverID},
                {$pull: {pendingContracts: req.body.itemID},
                    $push: {currentContracts: req.body.itemID}},
                { new: true },
                function(err){
                    if(err) return res.status(500).json({status: 'error'})
                })

            influencerModel.findOneAndUpdate({_id: req.body.senderID},
                {$pull: {pendingContracts: req.body.itemID},
                    $push: {currentContracts: req.body.itemID}},
                { new: true },
                function(err){
                    if(err) return res.status(500).json({status: 'error'})
                })
        }

        if(req.body.messageType === 1) {
            // add collaboration to influencer's clickedCollaborations
            await influencerModel.findOne({_id: req.body.senderID}, async (err, influencer) => {
                if (err || influencer === null) {
                    return res.status(400).json({status: 'error', 'error': 'influencer not exist'})
                }
                influencer.clickedCollaborations.push(req.body.itemID)
                influencer.save().catch((err) => {
                    return res.status(500).json({status: 'error', 'error': 'could not save'})
                })
            })
            // make the item to not change anymore.
            await updateCanEdit(req, res)
        }

        res.json({status: 'ok'})
    }).catch((err) => {
        if (err.code === 11000) {
            return res.status(400).json({status: 'error', 'error': 'the notification already exists'})
        }
        return res.status(500).json({status: 'error', 'error': 'could not save'})
    })
}


const notificationsOf = async (req, res) => {
    await companyModel.
    findOne({ _id: req.params.id}, async (err, company) => {
        if (err || company === null){
            await influencerModel.
            findOne({ _id: req.params.id}, async (err, influencer) => {
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

const deleteSpecificNotification = async (req, res) => {
    companyModel.findOneAndUpdate({_id: req.params.userID},
        {$pull: {Notifications: req.params.notificationID}},
        { new: true },
        function(err){
            influencerModel.findOneAndUpdate({_id: req.params.userID},
                {$pull: {Notifications: req.params.notificationID}},
                { new: true },
                function(err){
                    if(err) return res.status(500).json({status: 'error'})
                })
        })

    await notificationModel.
    findOne({ _id: req.params.notificationID}, async (err, notification) => {
        if (err || notification === null){
            return res.status(400).json({status: 'error', 'error': 'notification not exist'})
        }
        notification.remove(function (err, result){
            if(err) return res.status(500).json({status: 'error'})
            res.json({status: 'ok', 'deletedID': req.params.notificationID})
        })
    })
}

// todo: to finish it
const deleteNotifications = async (req, res) => {
    companyModel.findOneAndUpdate({_id: req.params.userID},
        {$pull: {Notifications: req.params.notificationID}},
        { new: true },
        function(err){
            influencerModel.findOneAndUpdate({_id: req.params.userID},
                {$pull: {Notifications: req.params.notificationID}},
                { new: true },
                function(err){
                    if(err) return res.status(500).json({status: 'error'})
                })
        })
}



module.exports = {
    sendNotification,
    notificationsOf,
    updateSeen,
    deleteSpecificNotification,
    deleteNotifications
}
