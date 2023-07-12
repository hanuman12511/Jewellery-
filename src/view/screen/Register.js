import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register() {
    const nav = useNavigate()
    const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let submitregister = async () => {
        console.log(file);
        console.log(fileName);

        const formdata = new FormData();
        formdata.append("file", file)
        formdata.append("filename", fileName)
        let data = JSON.stringify(Object.fromEntries(formdata));

        console.log(data);
        let params = {
            username:name,
            email: email,
            password: password,
            image: file
        }
        console.log(params);
        try {
            let res = await axios.post("register", params).catch(err => alert(err))
            console.log(res.data);
            let { success, message } = res.data
            if (success) {
                alert(message)
                nav("/login")
               
            }
            else {
                alert(message)
            }
        } catch (error) {
            console.log("error==", error);
            alert(error)
        }

        setEmail("")
        setPassword("")
        setName("")
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <h2 class="h1-responsive font-weight-bold text-center my-4">Register</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(d) => setName(d.target.value)} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(d) => setEmail(d.target.value)} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(d) => setPassword(d.target.value)} />
                        </Form.Group>
                        <div className='btn'>
                            <Button variant="primary" onClick={submitregister}>
                                Register
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;