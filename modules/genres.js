const mongoose = require('mongoose')
const genreSchema = new mongoose.Schema({
     genre:{
         type:String,
         required:[true,'Please provide a genre '],
         maxlength:30,
         minlength:3,
     },     
})
module.exports=mongoose.model('Genre',genreSchema);