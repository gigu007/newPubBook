const express = require('express')
const router = express.Router()
const{
    getAllBooks,
    getBook,
    createBook
}=require('../controllers/books');

router.route('/').post(createBook).get(getAllBooks)
router.route('/:id').get(getBook)
module.exports=router;