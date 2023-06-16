import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"

export default function Addtocart(){
  const loc = useLocation()
  const nav = useNavigate()
  const [qty,setUpdateQty] = useState(1)
  const [product,setProduct] = useState(loc.state)
  console.log(product);
  
  function addqty(){
    
    if(qty>0){
     var a=qty+1
        setUpdateQty(a)
      }
  }
  
  function subqty(){

    if(qty>1){
      var a=qty-1
        setUpdateQty(a)
      }
  }
    return(
    <>
    <Container>
      <Row>
        <Col className="bg-primary" lg={8}>

          <Row>
            <Col>My Cart</Col>
            </Row>
            <Row>
            <Col lg={6}>
              <p>1 item(s) in your cart</p>
              <div className="addtocart-item">
                <div><img src={product.image} className="addtocart-img"/></div>
                <div className="addtocart-text">
                    <p className="addtocart-text-name" >{product.name}</p>
                    <p className="addtocart-text-rate" >Rs.{product.rate}/-</p>
                </div>
                </div>
            </Col>
            <Col lg={3}>
              <p>Qty</p>
              <div className="detail-card2">
                
               <input type="button" className="detail-card2-btnadd" value="-" onClick={subqty}/>
                 <p className="qtynum">{qty}</p>
                <input type="button"className="detail-card2-btnadd" value="+"  onClick={addqty}/>
                  
            </div>
              </Col>
            <Col lg={3}><p>Price</p>
            
            <div>
            <p>Rs.{(product.rate)*qty}/-</p>
              </div>
            </Col>
              </Row>
              <Row>
            <Col>sign</Col>
          </Row>
        </Col>
        <Col className="bg-success" lg={4} >Payment Summary</Col>
      </Row>
    </Container>
    
    </>)
  }