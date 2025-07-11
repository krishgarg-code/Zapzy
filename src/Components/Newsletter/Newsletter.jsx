import React, { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('Please enter your email');
      return;
    }
    if (!email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }
    setShowSuccess(true);
    setEmail('');
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className='newsletter'>
      <h1>GET EXCLUSIVE OFFERS </h1>
      <h2>AND UPDATES</h2>
      <p>Subscribe to our newsletter and get upto 60% off on your first purchase</p>
      <form onSubmit={handleSubscribe}>
        <div className="newsletter-input">
          <input 
            type="email" 
            placeholder='Enter your email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
      
      {showSuccess && (
        <div className="success-popup">
          <div className="success-content">
            <h3>Success!</h3>
            <p>You have successfully subscribed to our newsletter</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Newsletter