const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController')

router.post('/register', companyController.companyRegister)
router.get('/', companyController.companies)
router.get('/:id', companyController.company)
router.post('/add_collaboration_proposal', companyController.addCollaborationProposal)
router.delete('/delete_collaboration_proposal/:id', companyController.deleteCollaborationProposal)

module.exports = router