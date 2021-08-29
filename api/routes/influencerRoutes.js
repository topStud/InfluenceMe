const express = require('express')
const router = express.Router()

const influencerController = require('../controllers/influencerController')

router.post('/register', influencerController.influencerRegister)
router.get('/', influencerController.influencers)
router.get('/:id', influencerController.influencer)
router.put('/:id', influencerController.update)
router.get('/search/:searchString', influencerController.searchBy)


module.exports = router