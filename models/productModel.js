const mongoose = require('mongoose'); 


const productSchema = new mongoose.Schema({
    Name:{
        type:String, 
        default:""
    }, 
    Image:{
        type:String
    }, 

    price:{
        type:String
    }, 

    Type:{
        type:String
    }

})

module.exports = mongoose.model('products',productSchema)