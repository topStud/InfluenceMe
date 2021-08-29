const express = require('express')
const router = express.Router()

const contractController = require('../controllers/contractController')

router.post('/', contractController.addContract)
router.get('/:id', contractController.contractsOf)




module.exports = router