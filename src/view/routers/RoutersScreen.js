import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../screen/Home";
import Register from "../screen/Register";
import Addtocart from "../screen/Addtocart";
import Details from "../screen/Details";
import Login from "../screen/Login";
import Profile from "../screen/Profile";
import OrderPlace from "../screen/OrderPlace";
import Payment from "../screen/Payment";

export default function RoutersScreen(){
   const[user,setUser] = useState(localStorage.getItem('user'))
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
     <div className="mainpage">
     <div className="homepage">
            <Link className="link" href="/">Home</Link>
            <Link className="link" href="/product">Product</Link>
            
            {user===null || user===false?<>
            <Link className="link" href="/login">Login</Link>
            <Link className="link" href="/register">Register</Link>
            </>:<>            <button onClick={profile}>Profile</button>
            <button onClick={logout}>Logout</button>
            </>}
            </div>
      </div>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/register" Component={Register}/>
            <Route path="/detail" Component={Details}/>
            <Route path="/orderplace" Component={OrderPlace}/>
            <Route path="/login" Component={Login}/>
            
            <Route path="/addtocart" Component={Addtocart}/>
        </Routes>
        <div className="homepage">
            <Link className="link" href="/">Home</Link>
            <Link className="link" href="/product">Product</Link>
            
            {user===null || user===false?<>
            <Link className="link" href="/login">Login</Link>
            <Link className="link" href="/register">Register</Link>
            </>:<>            <button onClick={profile}>Profile</button>
            <button onClick={logout}>Logout</button>
            </>}
            </div>
      
     </>
    )
  }