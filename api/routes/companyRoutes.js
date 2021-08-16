const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController')

router.post('/register', companyController.companyRegister)
router.get('/', companyController.companies)
router.get('/:id', companyController.company)

module.exports = router