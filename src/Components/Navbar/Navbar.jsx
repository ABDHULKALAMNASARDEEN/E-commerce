import React from 'react';
import './Navbar.css';
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
  const [menu,setmenu]=useState("Shop");
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>Yash_store</p>
      </div>
    
      <ul className='nav-menu'>
        <li onClick={()=>{setmenu("Shop")}}><Link style={{textDecoration:"none"}} to="/">Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Men")}}><Link style={{textDecoration:"none"}} to='mens'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Women")}}><Link style={{textDecoration:"none"}}  to="/womens">Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:"none"}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{textDecoration:"none"}}  to="/login"><button>Login</button></Link>
        <Link style={{textDecoration:"none"}}  to="cart"><img src={cart_icon} alt=""/></Link>
        <div className='nav-cart-count' >{getTotalCartItems()}</div>
      </div>
      
    </div>
  )
}

export default Navbar
