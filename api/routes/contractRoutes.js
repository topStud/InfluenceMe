const express = require('express')
const router = express.Router()

const contractController = require('../controllers/contractController')

router.post('/', contractController.addContract)
// router.delete('/:id', collaborationsController.deleteCollaborationProposal)
// router.get('/', collaborationsController.collaborationProposals)
// router.get('/:id', collaborationsController.specificCollaborationProposals)
// router.get('/company/:id', collaborationsController.collaborationProposalsOf)



module.exports = router