import { Link, Route, Routes } from "react-router-dom";
import Home from '../screen/Home'
import Register from "../screen/Register";
import Login from "../screen/Login";
import Product from "../screen/Product";
import Addtocart from "../screen/Addtocart";
import Details from "../screen/Details";
import {Container,Row,Col,Carousel,Navbar,Nav,NavDropdown,Form,Button} from 'react-bootstrap';
import { useState } from "react";

export default function RoutersScreen(){
   const[user,setUser] = useState(localStorage.getItem('user'))

   console.log(user);


function profile(){
   console.log("profile");
}

function logout(){
   console.log("logout");
   localStorage.clear()
   window.location.reload()
}

    return(
     <>
     <div>
       
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            
            {user===null || user===false?<>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            </>:<>            <Button onClick={profile}>Profile</Button>
            <Button onClick={logout}>Logout</Button>
            </>

}
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
           {/*  <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
           {/*  <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </div>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/register" Component={Register}/>
            <Route path="/detail" Component={Details}/>
            <Route path="/login" Component={Login}/>
            <Route path="/product" Component={Product}/>
            <Route path="/addtocart" Component={Addtocart}/>
        </Routes>
     </>
    )
  }