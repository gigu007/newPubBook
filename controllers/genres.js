const Genre = require('../modules/genres')
const {StatusCodes}=require('http-status-codes')
const NotFoundError = require('../error/not-found')

const createGenre = async(req,res)=>{
    const genre = await Genre.create({...req.body})
    res.status(StatusCodes.CREATED).json({genre:{name:genre.name}})
}
const getGenre =async (req,res)=>{
    const {id:genreID}=req
    const genre = await Genre.findOne({_id:genreID})
    
    if(!genre){
        throw new NotFoundError(`the given genre ${genreID} is not found or does not exist`)
    }
    res.status(StatusCodes.OK).json({genre})
    // res.status(200).json({genre})
}
const getAllGenres = async(req,res)=>{
    const genres = await Genre.find({})
    res.status(StatusCodes.OK).json({genre:{name:genres}})
}
module.exports={createGenre,getGenre,getAllGenres}