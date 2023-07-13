import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";


import axios from "axios";
function Home() {
const nav = useNavigate()
const [product,setProduct] =useState('')
const [banner,setBanner] =useState('')
const [offerlogo,setOfferlogo] =useState('')

useEffect(()=>{
async function show(){
   const res = await axios.get("/product")
   const res1 = await axios.get("/banner")
   const res2 = await axios.get("/offerlogo")
   setProduct(res.data)
   setBanner(res1.data)
   setOfferlogo(res2.data)
}
show()

},[])
   
console.log("offer logo");
console.log(offerlogo);
function productfun(data){
   return<>
   <div className="product" onClick={()=>nav("/detail",{state:data})}>
      <div className="product-offer">
      <img src={offerlogo.image} className="offerlogo"/>

      </div>
      <div className="product-image">
   <img src={data.image} className="pro-image"/>
      </div>
      <div className="product-name">
         <div> 
            <h6>{data.productname}</h6>
         </div>
         <div>
              <p><b>₹ {data.rate}/-</b></p>
         </div>
      
       
      </div>
   </div>
   </>
}

   return (
   <div className="mainpage">
      <div className="homepage">
         <div className="banner-image">
         { 
         banner&&<img src={banner.image} className="pro-image"/>
            }
         </div>
         {
            product&&product.map(data=>(
               productfun(data)
            ))
         }

      </div>
   
   </div>
      )
}

export default Home;