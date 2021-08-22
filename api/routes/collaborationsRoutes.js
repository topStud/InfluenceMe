const express = require('express')
const router = express.Router()

const collaborationsController = require('../controllers/collaborationsController')

router.post('/add', collaborationsController.addCollaborationProposal)
router.delete('/delete/:id', collaborationsController.deleteCollaborationProposal)
router.get('/', collaborationsController.collaborationProposals)


module.exports = router