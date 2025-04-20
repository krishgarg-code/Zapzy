import React from 'react'
import './Hero.css'
import hero1 from '../assets/hero1.png'
import arrow from '../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h1>Shop the latest trends</h1>
        <div>
          <p>Discover the best fashion and accessories</p> 
          <p>for you and your family.</p>
        </div>
        
        <div className='hero-latest-btn'>
          <div>Shop Now </div>
          {/* <img src={arrow} alt="arrow" /> */}
        </div>
      </div>
      <div className="hero-right">
        <img src={hero1} alt="Hero" />
      </div>
    </div>
  )
}

export default Hero