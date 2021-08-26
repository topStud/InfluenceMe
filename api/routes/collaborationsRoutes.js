const express = require('express')
const router = express.Router()

const collaborationsController = require('../controllers/collaborationsController')

router.post('/', collaborationsController.addCollaborationProposal)
router.delete('/:id', collaborationsController.deleteCollaborationProposal)
router.get('/', collaborationsController.collaborationProposals)
router.get('/:id', collaborationsController.specificCollaborationProposal)
router.get('/company/:id', collaborationsController.collaborationProposalsOf)


module.exports = router