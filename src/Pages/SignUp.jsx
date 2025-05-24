import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/LoginSignup.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add  logic here
    console.log('Signup form submitted:', formData)
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-fields">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Continue</button>
          <p className="login-login">
            Already have an account? <Link to="/SignIn">Login here</Link>
          </p>
          <div className="login-agree">
            <input type="checkbox" name="" id="" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp 