const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Please provide title name'],
        maxlength:50,
    },
    'date published':{
        type:Date,
        required:true,
    },
    'place published':{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'Genre',
    }
})
module.exports = mongoose.model('Books',bookSchema)