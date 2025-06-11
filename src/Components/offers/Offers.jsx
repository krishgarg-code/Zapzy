import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  const navigate = useNavigate();

  const handleCheckNow = () => {
    navigate('/Womens');
  };

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusives</h1>
        <h1>Offers For you </h1>
        <p>Get the best deals on your favorite products. Limited time offers available.</p>
        <button onClick={handleCheckNow}>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Offers" />
      </div>
    </div>
  )
}

export default Offers