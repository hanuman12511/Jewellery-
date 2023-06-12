import { useState } from "react";
import {Row, Col, Container,Form,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const nav = useNavigate()

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  function loginUser(){
   
    console.log(email);
    console.log(password);
    localStorage.setItem("user",email)
  nav("/")
    window.location.reload()
  


  }
    return(
     <Container>
      <Row>
        <Col>
        <div className="register-div">
          <h1>Register.</h1>
          <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={d=>setEmail(d.target.value)}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"value={password} onChange={d=>setPassword(d.target.value)} />
      </Form.Group>
      
      <Button variant="primary" type="button" onClick={loginUser} >
        Submit
      </Button>
    </Form>
          </div>

        </Col>
      </Row>
     </Container>
    )
  }