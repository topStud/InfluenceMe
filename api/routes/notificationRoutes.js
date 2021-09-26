const express = require('express')
const router = express.Router()

const notificationsController = require('../controllers/notificationController')

router.post('/', notificationsController.sendNotification)
router.get('/:id', notificationsController.notificationsOf) // id of company/influencer
router.put('/:id', notificationsController.updateSeen) // id of notification
router.delete('/:notificationID/:userID', notificationsController.deleteSpecificNotification)
router.delete('/:userID', notificationsController.deleteNotifications)
router.put('/reset-unseen/:id', notificationsController.resetNumberOfUnseen) // id of user


module.exports = router