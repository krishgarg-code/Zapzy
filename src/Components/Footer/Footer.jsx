import React from 'react'
import './footer.css'
import logo1 from '../assets/logo1.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo1} alt="" />
                <p>Shopper</p>
            </div>
            <ul className="footer-links">
                <li>Company </li>
                <li>Products</li>
                <li>Offices</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icon-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p>© 2025 Shopper. All rights reserved.</p>
                </div>
            
        </div>
    )
}

export default Footer