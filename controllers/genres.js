const Genre = require('../modules/genres')
const {StatusCodes, NOT_FOUND}=require('http-status-codes')

const createGenre = async(req,res)=>{
    const genre = await Genre.create({...req.body})
    res.status(StatusCodes.CREATED).json({genre:{name:genre.name}})
}
const getGenre =async (req,res)=>{
    const genre = await Genre.findOne({})
    res.status(StatusCodes.OK).json({genre:{name:genre}})
    if(!genre){
        throw new NotFoundError(`the given genre ${genre} is not found or does not exist`)
    }
}
const getAllGenres = async(req,res)=>{
    const genres = await Genre.find({})
    res.status(StatusCodes.OK).json({genre:{name:genres}})
}
module.exports={createGenre,getGenre,getAllGenres}