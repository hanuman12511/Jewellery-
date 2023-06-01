import { Link, Route, Routes } from "react-router-dom";
import Home from '../screen/Home'
import Register from "../screen/Register";
import Login from "../screen/Login";
import Product from "../screen/Product";
export default function RoutersScreen(){
    return(
     <>
     <div>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
     </div>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/register" Component={Register}/>
            <Route path="/login" Component={Login}/>
            <Route path="/product" Component={Product}/>
        </Routes>
     </>
    )
  }