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
      <div className='homepage'>
                        <h2 class="h1-responsive font-weight-bold text-center my-4">Register</h2>
                            <label>Enter Name</label>
                            <input type="name" placeholder="Enter Name" value={name} onChange={(d) => setName(d.target.value)} />
                           
                            <label>Email address</label>
                            <input type="email" placeholder="Enter email" value={email} onChange={(d) => setEmail(d.target.value)} />
                           

                        <label>Password</label>
                            <input type="password" placeholder="Password" value={password} onChange={(d) => setPassword(d.target.value)} />
                      
                        <div className='btn'>
                            <button variant="primary" onClick={submitregister}>
                                Register
                            </button>
                        </div>
</div>
    );
}

export default Register;