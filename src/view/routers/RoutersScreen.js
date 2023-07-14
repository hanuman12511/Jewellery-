import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "../screen/Home";
import Register from "../screen/Register";
import Addtocart from "../screen/Addtocart";
import Details from "../screen/Details";
import Login from "../screen/Login";
import Profile from "../screen/Profile";
import OrderPlace from "../screen/OrderPlace";
import Footer from "../component/Footer";
import Product from "../screen/Product";
import Header from "../component/Header";

export default function RoutersScreen(){
   const nav = useNavigate()
   const[user,setUser] = useState(localStorage.getItem('user'))
function profile(){
   console.log("profile");
   nav("/profile")
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
      <Header/>
      <div className="navbar1">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/product">Product</Link>
            
            {user===null ?<>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/register">Register</Link>
            </>:
            <>
            <button onClick={profile}>Profile</button>
            <button onClick={logout}>Logout</button>
            </>}
      </div>
         </div>
      </div>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/register" Component={Register}/>
            <Route path="/detail" Component={Details}/>
            <Route path="/orderplace" Component={OrderPlace}/>
            <Route path="/login" Component={Login}/>
            <Route path="/profile" Component={Profile}/>
            <Route path="/addtocart" Component={Addtocart}/>
            <Route path="/product" Component={Product}/>
        </Routes>
      <div className="homepage"> 
        <div className="footer">
            <h3>Footer</h3>
            <Footer/>
            </div>
      </div> 
     </>
    )
  }