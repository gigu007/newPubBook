const Books =require('../modules/books')
// const {StatusCodes}=require('http-status-codes')
const getAllBooks = async(req,res)=>{
    const books = await Books.find({createdBy:req.genre}).sort()
    res.status(StatusCodes.OK).json({books})
}
const getBook =async(req,res)=>{
    const book = await Books.findOne({
        _id:bookId,
        createdBy:genreId
    })
    if(!book){
        throw new NotFoundError('The given book is notfound')
    }
    res.staus(StatusCodes.OK).json({book})
}
const createBook = async (req, res) => {
    req.body.createdBy = req.genre.genreId
    const book = await Books.create(req.body)
    res.status(StatusCodes.CREATED).json({ book })
  }
module.exports={getAllBooks,getBook,createBook}
