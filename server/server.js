//api create

const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express()
var mysql = require('mysql');
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static('public'));
app.use('/img', express.static('img'));

const fs = require('fs')
const csv = require('fast-csv');


console.log(__dirname);

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
app.listen(8082,function(err,data){
    if(err)
        console.log(err);
    console.log("server started port:8082");
})



app.post('/register',(req,res)=>{
console.log(req.body);
        res.send(req.body)
})


app.post('/login',(req,res)=>{

    res.send("user login")
})

const data = []
 
 fs.createReadStream('./product.csv')
  .pipe(csv.parse({ headers: true }))
  .on('error', error => console.error(error))
  .on('data', row => data.push(row))
  .on('end', () =>{});
  //.on('end', () => console.log(data));
  
 app.get('/product',async(req,res)=>{
    const product=[
        {id:1,productname:"product",image:'./img/Wire/w1/FBhreGegmXlbN-medium.jpg'},
        {id:2,productname:"product",image:'./img/Wire/w2/0MmtcEoWYn8UU-medium.jpg'}
    ]
    res.send(product)
    //res.send(data)
})

app.post("/addtocart",(req,res)=>{

    res.send("addtocart")
})