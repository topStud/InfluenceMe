const express = require('express')
const router = express.Router()

const commonController = require('../controllers/commonController')

router.post('/login', commonController.login)
router.post('/forgot-password', commonController.forgotPassword)
router.put('/reset-password', commonController.resetPassword)

module.exports = router