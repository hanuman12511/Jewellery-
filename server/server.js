//api create

const express = require('express')
const app = express()
app.listen(8082,function(err,data){
    if(err)
        console.log(err);
    console.log("server started port:8082");
})
app.post('/register',(req,res)=>{

        res.send("user register")
})
app.post('/login',(req,res)=>{

    res.send("user login")
})
app.get('/product',(req,res)=>{

    res.send("user product")
})