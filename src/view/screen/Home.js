import {Container,Row,Col,Carousel,Navbar,Nav,NavDropdown,Form,Button} from 'react-bootstrap';
import {menu,productimage} from '../data/data'
import { useState } from 'react';
export default function Home(){
/* 
console.log(productimage);
console.log(menu); */

const[proimage,setProImage]=useState(productimage);
const[product,setProduct]=useState("");

console.log(proimage);

function updateProduct(){
  var img =[]
  setProImage(img)
}

function productshow(){
  console.log(product);
  setProImage(proimage.filter(d=>d.name===product))
  setProduct("")
}


    return(
    <Container>
      <Row>
        <Col md={3}lg={3} className='bg-primary'>
          <h1>col</h1>
        </Col>
        <Col md={6}lg={6}>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">User</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={product}
              onChange={d=>setProduct(d.target.value)}
            />
            <Button variant="outline-success" onClick={productshow}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Col>
        <Col md={3}lg={3} className='bg-danger'>
        <h1>col</h1>
        </Col>
      </Row>
    {/*   <Row>
        <Col>
        
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/677/302/small/abstract-technology-banner-background.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/stylish-abstract-web-banner-with-text-space_1017-39039.jpg?w=2000"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>
      </Row>
 */}




<Row>
<Col className='p-5'>
<h1>Prohramming</h1>
<p>The tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages.</p>
</Col>
<Row>

  {
    proimage&&proimage.map(d=>(

      <Col>
      <div style={{width:200,height:300,margin:20,backgroundColor:"red"}}>
      <img
          className="d-block w-100"
          src={d.img}
          alt="Third slide"
        />
        </div>
</Col>
))
  }
</Row>
</Row>






      <Row>
        <Col>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Col>

      </Row>
    </Container>
     )
  }