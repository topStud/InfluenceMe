const express = require('express')
const router = express.Router()

const influencerController = require('../controllers/influencerController')

router.post('/register', influencerController.influencerRegister)
router.get('/', influencerController.influencers)
router.get('/:id', influencerController.influencer)
router.put('/:id', influencerController.update)
router.get('/search-categories/:categories', influencerController.searchByCategories)
router.get('/search-bar/:searchBar', influencerController.searchBySearchBar)
router.get('/search/:searchBar/:categories', influencerController.searchBySearchBarAndCategories)
router.put('/change-password/:id', influencerController.passwordUpdate)
router.put('/disable/:id', influencerController.makeDisabled)
router.put('/activate/:id', influencerController.makeActive)

module.exports = router