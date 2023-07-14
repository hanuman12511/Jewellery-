import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import l from '../image/logo/l.png'
import r from '../image/logo/r.png'
import {similar} from '../data/data'
function Details() {
   const nav = useNavigate();
   const loc = useLocation();
   const [product, setProduct] = useState(loc.state)
   const [similarproduct, setSimilarProduct] = useState(similar)
   const [left, setLeft] = useState(1)
   const [right, setRight] = useState(4)
   const [totalitem, setTotalitem] = useState(0)
   console.log(product);


useEffect(()=>{
   showdata()
},[])


function showdata(){
   console.log(similarproduct);
   setTotalitem(similar.length)
   setSimilarProduct(similar.filter(d=>d.id>=left && d.id<=right))
   
}
function leftItem(data){
   console.log(left);
   console.log(right);
   
   if(right>4){
     let l= left-1
     let r= right-1
      setLeft(l)
      setRight(r)
      showdata()
   }
   /* let id = -1
   for(let i=0;i<data.length;i++){
    
      data.map(d=>{
         id=d.id
       
      })
   }
   if(id>=4){
     //      setSimilarProduct(similar.filter(d))

   } */
  }
function rightItem(data){
   console.log(left);
   console.log(right);
   if(right>=4 && right<=totalitem){
     let r= right+1
     let l= left+1
      setRight(r)
      setLeft(l)
      showdata()
   }
   
  /*  let id = -1
   for(let i=0;i<data.length;i++){
    
      data.map(d=>{
         id=d.id
       
      })
   }
   if(id>=4){

   } */
}

   async function productaddtocart(product) {

      let params = {
         ...product
      }

      let res = await axios.post("addtocart", params)
      console.log(res.data);
      let { message, success } = res.data
      console.log(success);
      if (success) {
         alert(message)
         nav("/Addtocart")
      }
      else {
         alert(message)
      }
   }
   function productbuynow() {
      nav("/Payment")
   }
   return (
   <div className="homepage">
      <div>
         <h3>Product Details</h3> 
      </div>
      <div className="inline-flex w-100 m-30">
         <div className='detail-s-image'>
                  <img src={product.image} alt="" className="pro-image" />
         </div>
         <div className='detail-s-allimage'>
               <div className='detail-s-shotimage m-20'>
                  <img src={product.image} alt="" className="w-100" />
               </div>
               <div className='detail-s-shotimage m-20'>
                  <img src={product.image} alt="" className="w-100" />
               </div>
               <div className='detail-s-shotimage m-20'>
                  <img src={product.image} alt="" className="w-100" />
               </div>
               <div className='detail-s-shotimage m-20'>
                  <img src={product.image} alt="" className="w-100" />
               </div>
         </div>
         <div className='detail-s-text m-20'>
               <button className="" id="btn" onClick={() => productaddtocart(product)}>Buy Now </button>
               <button className="" id="btn" onClick={() => productaddtocart(product)}>Add to cart </button>
           <hr/>  
               <p>Product Name:<h2>{product.productname}</h2></p>
               <p>Price :<h4 className="">₹{product.rate}</h4></p>
               <p> MRP :<h4 className=""><del>₹{2*product.rate}</del></h4></p>
               <p>{product.Rating}</p>
               <p><h4>{product.description}</h4></p>
               <hr/>  
               
                </div>
             </div>
             <div className="homepage">
               <div>
               <h3> Similar Product</h3>
              </div>
              <div className="inline-flex  similar">
              <div className="left-arrow" onClick={()=>leftItem(similarproduct)}>
                    <img src={l} />
              </div>
              <div className="mid-pro inline-flex ">
               {
                 similarproduct&& similarproduct.map(d=>(
                     <div className="similar-product">
                        <img src={d.image} />
                     </div>
                  ))
               }
               </div>
                <div className="right-arrow" onClick={()=>rightItem(similarproduct)}>
                      <img src={r} />
                </div>
             </div>
             </div>
      </div>
           
   );
}

export default Details;