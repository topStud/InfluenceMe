const express = require('express')
const router = express.Router()

const sse = require('../controllers/sse')

router.get('/status', sse.status)
router.get('/events/:id', sse.eventsHandler)
//router.post('/fact', sse.addFact)


module.exports = router