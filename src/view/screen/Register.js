import axios from "axios";
import { useState } from "react";
import {Row, Col, Container,Form,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Register(){
  const nav = useNavigate()
  const[fname,setFName] = useState('')
  const[lname,setLName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[cpassword,setCPassword] = useState('')
async  function registerUser(){
    
    //nav("/login")
   const params =   {
      "fname":fname,
      "lname":lname,
      "email":email,
      "pass":password,
      "cpass":cpassword
  }
  console.log(params);
try {
  
  const res = await axios.post("http://ankursingh.xyz/api/registerUser.php",params)
  console.log(res?.data);
 
  const{success,message} = res.data
  if(success){
    nav("/login")
  alert(message)
  }else{
    alert(message)
  }
  
} catch (error) {
 console.log(error); 
}
  setCPassword("")
  setEmail("")
  setFName("")
  setLName("")
  setPassword("")

  


  }
    return(
     <Container>
      <Row>
        <Col>
        <div className="register-div">
          <h1>Register.</h1>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter FName:</Form.Label>
        <Form.Control type="text" placeholder="Enter FName" value={fname} onChange={d=>setFName(d.target.value)} />
       
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter LName:</Form.Label>
        <Form.Control type="text" placeholder="Enter FName" value={lname} onChange={d=>setLName(d.target.value)} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={d=>setEmail(d.target.value)}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"value={password} onChange={d=>setPassword(d.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="cPassword"value={cpassword} onChange={d=>setCPassword(d.target.value)} />
      </Form.Group>
      
      <Button variant="primary" type="button" onClick={registerUser} >
        Submit
      </Button>
    </Form>
          </div>

        </Col>
      </Row>
     </Container>
    )
  }