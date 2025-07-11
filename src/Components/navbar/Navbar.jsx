import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import cart_icon from '../assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { SignOutButton } from '@clerk/clerk-react';

const Navbar = () => {
    const [menu, setMenu] = useState('store');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className='navbar'>
            <Link to="/" className='nav-logo' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <img src={logo1} alt="logo" />
                <p style={{ color: '#000', marginLeft: '8px' }}>Zayora</p>
            </Link>

            <div className='nav-hamburger' aria-label='Open menu' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className={`nav-menu${mobileMenuOpen ? ' nav-menu-mobile-open' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                <li onClick={() => setMenu('store')}> <Link style={{ textDecoration: 'none' }} to="/">Store</Link> {menu === 'store' && <hr />} </li>
                <li onClick={() => setMenu('Mens')}> <Link style={{ textDecoration: 'none' }} to="/Mens">Mens</Link> {menu === 'Mens' && <hr />}  </li>
                <li onClick={() => setMenu('Womens')}> <Link style={{ textDecoration: 'none' }} to="/Womens">Womens</Link> {menu === 'Womens' && <hr />}</li>
                <li onClick={() => setMenu('Kids')}>  <Link style={{ textDecoration: 'none' }} to="/Kids">Kids</Link> {menu === 'Kids' && <hr />}</li>
                {mobileMenuOpen && (
                  <>
                    <li>
                      <SignedOut>
                        <div className="mobile-auth-buttons">
                          <SignInButton className="sign-in-btn" />
                          <SignUpButton className="sign-up-btn" />
                        </div>
                      </SignedOut>
                      <SignedIn>
                        <div className="user-icon"><UserButton /></div>
                      </SignedIn>
                    </li>
                    <li>
                      <Link to="/Cart"><img className='cart-icon' src={cart_icon} alt="cart" /></Link>
                      <div className='nav-cart-count'>{getTotalCartItems()}</div>
                    </li>
                  </>
                )}
            </ul>

            <div className='nav-login-cart'>
                <header>
                    <SignedOut>
                        <SignInButton className="sign-in-btn" />
                        <SignUpButton className="sign-up-btn" />
                    </SignedOut>
                    <SignedIn >
                       <div className="user-icon"> <UserButton  /></div>
                    </SignedIn>
                </header>
              
                <Link to="/Cart"><img className='cart-icon' src={cart_icon} alt="cart" /></Link>
                        <div className='nav-cart-count'>{getTotalCartItems()}</div>
                        
            </div>

        </div>
    );
};

export default Navbar;
