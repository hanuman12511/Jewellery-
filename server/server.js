//api create

const express = require('express')
const cors = require("cors");
const app = express()
app.use(cors())
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

    var product=[
        {id:1,name:"Kalinga Gold 4 Sq mm Red FR PVC Housing Wire, Length: 90 m",img:"",cate:"wire",salerate:1761,mrp:3790,NominalSize:["4 Sqmm","0.75 Sqmm","1 Sqmm","     1.5 Sqmm"],color:["Red","Black","Blue","Green","Yellow"],"Buy More & Save More":[{"Qty 2 - 3":"₹2,074 /pc","Qty 4 - 5":"₹2,070 /pc","Qty 6 - 7":"₹2,066 /pc","Qty 8+":"₹2,062 /pc"}],"About This Product":[{"Key Features":["International Standard.","Sleek Design & Durable Wire.","High Insulation Resistance, Anti Termite & Anti Rodent."],"Product Specifications":[{Brand:"Kalinga Gold","Applications":"Home, Industrial & Office Use","Colour":"red","Conductor Material":"Copper"}]}],"Product Details":"Kalinga Gold 4 Sq mm Red FR PVC Housing Wire, is a fire retardant PVC insulated wire. This product is 90m long. The core material used in this wire is copper. This product has a capacity of pass up to 1100v of current. The current rating is 26 amp. The Kalinga Gold 4 Sq mm Red FR PVC Housing Wire conductor diameter is 0.3mm. With 1 cord this product is very useful. It has 56 conductors in this wire. The cross-section area of this wire is 4 sq mm. This product is available in a red color variant.","Return & Warranty Policy":["Upto 7 Days Returnable","Missing Product","Wrong Product","Damaged Product","Defective Product"],"images":[]},
        {id:2,name:"Kalinga Gold 4 Sq mm Green FR PVC Housing Wire, Length: 90 mm",img:"",cate:"wire",salerate:1761,mrp:3790,NominalSize:["4 Sqmm","0.75 Sqmm","1 Sqmm","     1.5 Sqmm"],color:["Red","Black","Blue","Green","Yellow"],"Buy More & Save More":[{"Qty 2 - 3":"₹2,074 /pc","Qty 4 - 5":"₹2,070 /pc","Qty 6 - 7":"₹2,066 /pc","Qty 8+":"₹2,062 /pc"}],"About This Product":[{"Key Features":["International Standard.","Sleek Design & Durable Wire.","High Insulation Resistance, Anti Termite & Anti Rodent."],"Product Specifications":[{Brand:"Kalinga Gold","Applications":"Home, Industrial & Office Use","Colour":"red","Conductor Material":"Copper"}]}],"Product Details":"Kalinga Gold 4 Sq mm Red FR PVC Housing Wire, is a fire retardant PVC insulated wire. This product is 90m long. The core material used in this wire is copper. This product has a capacity of pass up to 1100v of current. The current rating is 26 amp. The Kalinga Gold 4 Sq mm Red FR PVC Housing Wire conductor diameter is 0.3mm. With 1 cord this product is very useful. It has 56 conductors in this wire. The cross-section area of this wire is 4 sq mm. This product is available in a red color variant.","Return & Warranty Policy":["Upto 7 Days Returnable","Missing Product","Wrong Product","Damaged Product","Defective Product"],"images":[]}
    ]
    res.send(product)
})