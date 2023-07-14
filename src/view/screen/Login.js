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
    <div className='homepage'>
                        <h2 class="h1-responsive font-weight-bold text-center my-4">Login</h2>
                       
                            <label>Email address</label>
                            <input type="email" placeholder="Enter email" value={email} onChange={(d) => setEmail(d.target.value)} />
                           
                     <label>Password</label>
                            <input type="password" placeholder="Password" value={password} onChange={(d) => setPassword(d.target.value)} />
                      
                        <div className='btn'>
                            <button variant="primary" onClick={submitlogin}>
                                Login
                            </button>
                        </div>
                        </div>
                   
    );
}

export default Login;