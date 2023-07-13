//api create

const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express()
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
//read image
app.use(express.static('public'));
app.use('/img', express.static('img'));

const fs = require('fs')
const csv = require('fast-csv');
const {product,banner, offerlogo} = require('./data/data')
  
app.listen(8082,function(err,data){
    if(err)
        console.log(err);
    console.log("server started port:8082");
})

app.get('/product',async(req,res)=>{
  
<<<<<<< HEAD
 app.get('/product',async(req,res)=>{
    try {
        const data = fs.readFileSync('./data/data.js', 'utf8');
        console.log(data.product);
      } catch (err) {
        console.error(err);
      }
    res.send(data)
    //res.send(data)
=======
    res.send(product)
   
>>>>>>> ac971007274652227496473d83b2da651e7110d3
})

app.get('/banner',async(req,res)=>{
   
    res.send(banner)
   
})

app.get('/offerlogo',async(req,res)=>{
   
    res.send(offerlogo)
   
})
app.post("/removecartitem",function(req,res){

    try { fs.writeFileSync('./data/addtocart.json',"","utf8")
    } catch (error) {
            console.log("er");
            console.log(error);    
        }
       var result
       req.body.map(d=>{
        result = fs.appendFileSync('./data/addtocart.json', JSON.stringify(d),"utf8")
            fs.appendFileSync('./data/addtocart.json', "\n","utf8")
       })

       
          let resultdata=""
      if(!result){
          resultdata={success:true,message:"Product remove to cart."}
      }
      else{
          resultdata={success:false,message:"Oops! Product not remove to cart."}
          
      }
      res.send(resultdata) 
})




app.post('/payment',function(req,res){
  
  
    let result=fs.appendFileSync('./data/payment.json', JSON.stringify(req.body),"utf8")
     fs.appendFileSync('./data/payment.json', "\n","utf8")
     let resultdata=""
     if(!result){
         resultdata={success:true,message:"Order successfully"}
     }
     else{
         resultdata={success:false,message:"Order not  successfully"}
         
     }
     res.send(resultdata)
  })
 




app.post('/addtocart',function(req,res){
    let result = fs.appendFileSync('./data/addtocart.json', JSON.stringify(req.body),"utf8")
    fs.appendFileSync('./data/addtocart.json', "\n","utf8") 
    let resultdata=""
    
    if(!result){
        resultdata={success:true,message:"Product added to cart"}
    }
    else{
        resultdata={success:false,message:"data not insert successfully"}
        
    }
    res.send(resultdata)
    
 })



 app.post('/showtocart',function(req,res){
    let data=fs.readFileSync('./data/addtocart.json',"utf8")
    let adddata=[]
    data.split('\n').forEach(d=>{
        adddata.push(d)
    })
    let add1=[]
    adddata.map(d=>{
        if(d!=="")
        add1.push(JSON.parse(d))
    })
   let cartitem=[]
   console.log(req.body.username);
    add1.map(d=>{
        if(req.body.username === d.username){
                cartitem.push(d);
        }
    })
   
    res.send(add1)
 })