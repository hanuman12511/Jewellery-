import { useState } from "react"
import { Button, Col, Container,Row } from "react-bootstrap";
import { useLocation } from "react-router-dom"

export default function Details(){
  const loc = useLocation()
  const [product,setProduct] = useState(loc.state)
  console.log(product);
    return(
    <Container>
      <Row>
        <Col lg={5} className="bg-primary">
          <div className="detail-img"><h1>image</h1></div>
          <div className="detail-img1">
               <div className="detail-img1-1">
            
              </div>
              
              <div className="detail-img1-1">
            
            </div>
            
            <div className="detail-img1-1">
            
            </div>
            
            <div className="detail-img1-1">
            
            </div>
            </div>
          </Col>
        <Col lg={4} className="bg-success">
          <div className="detail-text">
              <div className="detail-text1">
                  <h2>Product name</h2>
              </div>
              <div className="detail-text2">
                  <h3>Rate</h3>
                </div>
              <div className="detail-text3">
                    <h3>size</h3>
              </div>
              <div className="detail-text4">
                <h3>color </h3>
                </div>
            </div>
          </Col>
        <Col lg={3} className="bg-primary">
        <div className="detail-card">
            <div className="detail-card1">
               <h2>rate</h2>
            </div>
            <div className="detail-card2">
               <p>Update Qty:</p> <button className="detail-card2-btnsub"><p className="qtynum1">-</p></button><p className="qtynum">1</p><button className="detail-card2-btnadd"><p className="qtynum1">+</p></button>
            </div>
            <div className="detail-card3">
             <Button>Add To Cart</Button>
            </div>
            
            <div className="detail-card4">
            <Button>Buy Now</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    )
  }