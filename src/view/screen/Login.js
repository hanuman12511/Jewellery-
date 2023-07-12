import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
    const nav = useNavigate();
    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    let submitlogin = async () => {

        let params = {
            email: email,
            password: password
        }

        console.log(params);
        try {
            let res = await axios.post("login", params).catch(err => alert(err))
            console.log(res.data);

            let { success, message, data } = res.data
            if (success) {
                alert(message)
                console.log(data);
                 localStorage.setItem('user',true)
                nav("/")
                window.location.reload(true);
            }
            else {
                alert(message)
            }
        } catch (error) {
            alert(error)
        }
        setEmail("")
        setPassword("")
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <h2 class="h1-responsive font-weight-bold text-center my-4">Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Enter Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(d) => setName(d.target.value)} />
                            <Form.Text className="text-muted">
                            </Form.Text> */}
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
                            <Button variant="primary" onClick={submitlogin}>
                                Login
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;