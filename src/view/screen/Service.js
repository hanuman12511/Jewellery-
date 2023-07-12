import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { product1 } from "../data/data";
// import { useNavigate } from "react-router-dom";
function Service() {
   //    const nav = useNavigate()
   // console.log(product1);
   return (
      <>
         <Container fluid>
            <Row>
               <h2 class="service font-weight-bold text-center my-4">Service</h2>
               {
                  product1.map(function (d) {
                     return (
                        <Col className="Sec">
                           <div class="card" style={{ width: '18rem' }}>
                              <img src={d.image} class="card-img-top" alt="" />
                              
                              
                              <Card.Title className="title text-center" ><h4>{d.name}</h4></Card.Title>
                            
                              <div class="card-body">
                              <h6>{d.description}</h6>
                              </div>
                           </div>
                        </Col>
                     )
                  })
               }

            </Row>
         </Container>

      </>
   );
}

export default Service;