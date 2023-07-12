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
      <Container>
         <Row>
            <Col lg={6}>
               <div className='w-75  p-3'>
                  <img src={product.image} alt="" className="productimg" />
               </div>
            </Col>
            <Col lg={6}>
               <div>
                  <p><b><h2>{product.productname}</h2></b></p>
                  <p><h4 className="text-danger">₹{product.rate}</h4></p>
                  <p><h4 className="text-black"><del>₹{2*product.rate}</del></h4></p>
                  <p>{product.Rating}</p>
                  <p><h4>{product.description}</h4></p>
                  <br />
                  <br />
                  {/* <button className="btn btn-primary mr-2 me-5">Buy Now </button> */}
                  <button className="btn btn-success mr-2" id="btn" onClick={() => productaddtocart(product)}>Buy Now </button>
                  <button className="btn btn-primary mr-2" id="btn" onClick={() => productaddtocart(product)}>Add to cart </button>
               </div>
            </Col>
         </Row>
      </Container>
   );
}

export default Details;