import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSIVE OFFERS </h1>
        <h2>AND UPDATES</h2>
        <p>Subscribe to our newsletter and get  upto 60% off  on your first purchase</p>
        <div>
            <input type="email" placeholder='Enter your email' />
            <button>Subscribe</button>
            </div>
    </div>
  )
}

export default Newsletter