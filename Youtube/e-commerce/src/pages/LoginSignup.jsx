import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSigup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" name="" id="" placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>
        <button>continue</button>
        <p className="loginSignup-login">Already have an account? <span>Login</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
