import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo1 from '../assets/logo1.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleLinkClick = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
        <div className='footer'>
            <div className="footer-logo">
                <Link to='/'><img src={logo1} alt="" /></Link>
                <p>Zayora</p>
            </div>
            <ul className="footer-links">
                <li onClick={handleLinkClick}>Company</li>
                <li onClick={handleLinkClick}>Products</li>
                <li onClick={handleLinkClick}>Offices</li>
                <li onClick={handleLinkClick}>About Us</li>
                <li onClick={handleLinkClick}>Contact Us</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icon-container" onClick={handleLinkClick}>
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icon-container" onClick={handleLinkClick}>
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icon-container" onClick={handleLinkClick}>
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>© 2025 Zayora. All rights reserved.</p>
            </div>

            {showPopup && (
                <div className="coming-soon-popup">
                    <div className="coming-soon-content">
                        <h3>Coming Soon!</h3>
                        <p>Stay tuned for exciting updates!</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Footer