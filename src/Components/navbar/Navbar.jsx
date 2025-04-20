import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import cart_icon from '../assets/cart_icon.png';

const Navbar = () => {
    const [menu, setMenu] = useState('store');

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo1} alt="logo" />
                <p>Shopper</p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() => setMenu('store')}> <Link style={{ textDecoration: 'none' }} to="/">Store</Link> {menu === 'store' && <hr />} </li>
                <li onClick={() => setMenu('Mens')}> <Link style={{ textDecoration: 'none' }} to="/Mens">Mens</Link> {menu === 'Mens' && <hr />}  </li>
                <li onClick={() => setMenu('Womens')}> <Link style={{ textDecoration: 'none' }} to="/Womens">Womens</Link> {menu === 'Womens' && <hr />}</li>
                <li onClick={() => setMenu('Kids')}>  <Link style={{ textDecoration: 'none' }} to="/Kids">Kids</Link> {menu === 'Kids' && <hr />}</li>
            </ul>

            <div className='nav-login-cart'>
                <Link to="/Login"><button>Login</button> </Link>
                <Link to="/Cart"><img src={cart_icon} alt="cart" /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    );
};

export default Navbar;
