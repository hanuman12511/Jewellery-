import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Details() {
   const nav = useNavigate();
   const loc = useLocation();
   const [product, setProduct] = useState(loc.state)
   console.log(product);

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
      <div className="inline-flex w-100 m-30">
         <div className='detail-s-image'>
                  <img src={product.image} alt="" className="img-100" />
         </div>
         <div className='detail-s-allimage'>
               <div className='detail-s-shotimage m-20'>
                  <img src={product.image} alt="" className="img-100" />
               </div>
               <div className='detail-s-shotimage m-20'>
                  <img src={product.image} alt="" className="img-100" />
               </div>
               <div className='detail-s-shotimage m-20'>
                  <img src={product.image} alt="" className="img-100" />
               </div>
               <div className='detail-s-shotimage m-20'>
                  <img src={product.image} alt="" className="img-100" />
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
      </div>
           
   );
}

export default Details;