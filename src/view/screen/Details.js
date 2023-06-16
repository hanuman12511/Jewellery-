import { useState } from "react"
import { Button, Col, Container,Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"


export default function Details(){
  const loc = useLocation()
  const nav = useNavigate()
  
  const [product,setProduct] = useState(loc.state)
  const [image,setImage] = useState(product.img)
  const [qty,setUpdateQty] = useState(1)
  const [size,setSize] = useState('')
  const [color,setColor] = useState('')
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
    <Container>
      <Row>
        <Col lg={5} className="">
          <div className="detail-img">
            <img src={image} /></div>
          <div className="detail-img1">
              
            { product.images.map(d=>(
              <div className="detail-img1-1" onClick={()=>setImage(d)}>
                <img src={d} />
            </div>
            ))
            
          }
          </div>
          </Col>
        <Col lg={4} className="">
          <div className="detail-text">
              <div className="detail-text1">
                  <h5>{product.name}</h5>
              </div>
              <div className="detail-text2">
                  <p>Rs.{product.salerate}/-<del><span><sub>Rs.{product.mrp}/-</sub></span></del></p>
                </div>
                <h5>NominalSize</h5>
              <div className="detail-text3">
                   {
                    product.NominalSize.map(d=>(
                      <p onClick={()=>setSize(d)}>{d}</p>
                    ))

                   }
              </div>
              
                <h5>color</h5>
              <div className="detail-text3">
                   {
                    product.color.map(d=>(
                      <p onClick={()=>setColor(d)}>{d}</p>
                    ))

                   }
              </div>
           </div>
          </Col>
        <Col lg={3} className="">
        <div className="detail-card">
            <div className="detail-card1">
            <p>Rs.{product.salerate}/-</p>
             
            </div>
            <div className="detail-card2">
               <p className="detail-card2-update-text">Update Qty:</p> 
               <input type="button" className="detail-card2-btnadd" value="-" onClick={subqty}/>
                 <p className="qtynum">{qty}</p>
                <input type="button"className="detail-card2-btnadd" value="+"  onClick={addqty}/>
                  
            </div>
            <div className="detail-card3">
             <Button onClick={()=>nav("/addtocart",{state:{pid:product.id,image:product.img,name:product.name,rate:product.salerate,qty:qty,size:size,color:color}})}>Add To Cart</Button>
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