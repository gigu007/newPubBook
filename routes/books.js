const express = require('express')
const router = express.Router()
const{
    getAllBooks,
    getBook,
    createBook
}=require('../controllers/books');

router.route('/').get(getAllBooks)
router.route('/:id').get(getBook).post(createBook)
module.exports=router;