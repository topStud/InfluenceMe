const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController')

router.post('/register', companyController.companyRegister)
router.get('/', companyController.companies)
router.get('/:id', companyController.company)
router.put('/:id', companyController.update)
router.put('/change-password/:id', companyController.passwordUpdate)

router.put('/disable/:id', companyController.makeDisabled)
router.put('/activate/:id', companyController.makeActive)


module.exports = router