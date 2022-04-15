const express = require('express')
const router = express.Router()
const upload = require('../controllers/genres')
router.post('/upload', upload)


module.exports = router
