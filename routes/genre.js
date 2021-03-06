const express = require('express')
const router = express.Router()
const {createGenre,getAllGenres,getGenre} = require('../controllers/genres')
router.route('/').post(createGenre).get(getAllGenres)
router.route('/:id').get(getGenre)



module.exports = router
