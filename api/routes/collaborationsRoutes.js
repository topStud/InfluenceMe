const express = require('express')
const router = express.Router()

const collaborationsController = require('../controllers/collaborationsController')

router.post('/', collaborationsController.addCollaborationProposal)
router.delete('/:id', collaborationsController.deleteCollaborationProposal)
router.get('/', collaborationsController.collaborationProposals)
router.get('/:id', collaborationsController.specificCollaborationProposal)
router.get('/company/:id', collaborationsController.collaborationProposalsOf)
router.put('/:id', collaborationsController.update)
router.put('/cantEdit/:id', collaborationsController.updateCanEdit)
router.get('/search/:searchString', collaborationsController.searchBy)


module.exports = router