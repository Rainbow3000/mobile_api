require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
const Product = require('./models/productModel')
const User = require('./models/userModel')
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("db connect success !"))
  .catch((err) => console.log("db connect err", err));
app.use(helmet());

app.use(express.json()); 

const PORT = process.env.PORT || 5000;



app.get('/api/products',async(req,res,next)=>{
    try {
        const products = await Product.find({}); 
        res.status(200).json(products);  
    } catch (error) {
        console.log(error); 
    }
})




app.post('/api/login',async(req,res,next)=>{
    try {
        const {Email,Password} = req.body
        const user = await User.findOne({Email}); 
        if(user && user.Password === Password){
            res.status(200).json({
                message:"Đăng nhập thành công !", 
                user
            })
        }else{
            res.status(200).json('Email hoặc mật khẩu không chính xác !')
        }
    } catch (error) {
        console.log(error)
    }
})


app.post('/api/register',async(req,res,next)=>{
    try {
        const _User = new User(req.body); 
        const user = await _User.save();
        if(user){
            res.status(200).json('Đăng kí tài khoản thành công !')
        }else{
            res.status(200).json('Đăng kí tài khoản thất bại !')

        }
    } catch (error) {
        console.log(error)
    }
})


app.listen(PORT, () =>
  console.log(`server is running at  http://localhost:${PORT}`)
);
