const Genre = require('../modules/genres')
const {StatusCodes}=require('http-status-codes')
const upload = async(req,res)=>{
    const genre = await Genre.create({...req.body})
    res.status(StatusCodes.CREATED).json({genre:{name:genre.name}})
}
module.exports=upload