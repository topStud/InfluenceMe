const express = require('express')
const router = express.Router()

const contractController = require('../controllers/contractController')

router.post('/', contractController.addContract)
router.get('/of/:id', contractController.contractsOf)// id of user
router.get('/:id', contractController.findContract)// id of contract



module.exports = router