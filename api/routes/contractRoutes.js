const express = require('express')
const router = express.Router()

const contractController = require('../controllers/contractController')

router.post('/', contractController.addContract)
//router.get('/of/:id', contractController.contractsOf)// id of user
router.get('/:id', contractController.findContract)// id of contract
router.get('/pending/:id', contractController.findPendingContractsOf)// id of user
router.get('/past/:id', contractController.findPastContractsOf)// id of user
router.get('/current/:id', contractController.findCurrentContractsOf)// id of user


module.exports = router