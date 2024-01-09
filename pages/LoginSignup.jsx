import React from 'react'
import './css/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Sign Up</button>
        <p className="loginsignup-login">Already have an account?<span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing,I agree to the terms of Terms and Conditions. </p>
        </div>
      </div>
    </div>
  )
}

