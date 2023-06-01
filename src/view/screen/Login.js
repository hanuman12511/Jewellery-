import { useState } from "react"
export default function Login(){
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  function loginuser(){
    console.log(email);
    console.log(password);
    //alert("login user")
  }
    return(
      <div class="loginform">
        <h1>User Login..</h1>
        <input  type="email" placeholder="enter email" value={email} onChange={d=> setEmail(d.target.value)}/>
        <input type="password" value={password} onChange={d=> setPassword(d.target.value)}/>
        <button onClick={loginuser}>Login</button>
      </div>
    )
  }