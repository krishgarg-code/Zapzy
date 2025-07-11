import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/LoginSignup.css'

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log('Signin form submitted:', formData)
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-fields">
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
          </div>
          <button type="submit">Continue</button>
          <p className="login-login">
            Don't have an account? <Link to="/SignUp">Sign Up here</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignIn 