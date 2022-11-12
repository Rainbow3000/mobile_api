const mongoose = require('mongoose'); 


const userSchema = new mongoose.Schema({
    Email:{
        type:String, 
        default:""
    }, 
    Password:{
        type:String
    }, 


})

module.exports = mongoose.model('users',userSchema)