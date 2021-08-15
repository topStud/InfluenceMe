const express = require('express')
const router = express.Router()

const commonController = require('../controllers/commonController')

router.post('/login', commonController.login)

module.exports = router