import React from 'react'
import './CSS/LoginSignup.css'
import loginpic from '../Components/assets/loginpic.png'

const LoginSignup = () => {
  return (
    <div className="login-page">
      <div className="login-left">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      <div className="login-right">
        <img src={loginpic} alt="Login_Illustration" />
      </div>
    </div>
  );
};

export default LoginSignup