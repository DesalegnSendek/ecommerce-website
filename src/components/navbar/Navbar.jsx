import React, { useState } from 'react';
import '../hero/Hero';
import logo1 from '../assets/logo2.jpg';
import cart from '../assets/cart.jpeg';
import Shop from '../../pages/Shop';
// import './Navbar.css';
import '../navbar/Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu] = useState("shop");

    return (
        <div className='nav-bar'>
                <div className="nav-logo"><img src={logo1} alt='' about='logo'/> 
                        <p>Market</p>
                </div>
                <ul className='nav-menu'>
                    <li onClick={()=>{setMenu("Shop")}}>  <Link to={"/Shop"}>Home</Link> {menu==="shop"?<hr/>:<></>}</li>                    
                    <li onClick={()=>{setMenu("men")}}>   <Link to={"/men"}>Men</Link> {menu==="men"?<hr/>:<></>}</li>  
                    <li onClick={()=>{setMenu("women")}}> <Link to={"/women"}>Women</Link>{menu==="women"?<hr/>:<></>}</li>  
                    <li onClick={()=>{setMenu("kid")}}>  <Link to={"/kid"}>Child</Link>{menu==="kid"?<hr/>:<></>}</li>
                </ul>

                <div className="login-cart">
                   <Link to={"/Loginsignup"}> <button>Login</button> </Link> 
                    <Link to={"/Cart"}><img src={cart} alt='cart'/></Link>
                    <div className="nav-cart-count">
                        0
                    </div>
                </div>
        </div>
    );
}

export default Navbar;

