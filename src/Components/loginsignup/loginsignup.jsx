import React, { useState } from 'react';
import './loginsignup.css';


import email_icon from '../assests/email.png';
import user_icon from '../assests/person.png';
import password_icon from '../assests/password.png';

const LoginSignup = () => {

    const [action,setAction]=useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"? <div></div>:<div className="input">
          <img src={user_icon} alt="User Icon" />
          <input type="Name" placeholder="Enter your username" />
        </div>}
        
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder="Enter your email" />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Enter your password" />
        </div>
      </div>
      {action === "Sign Up" ? (
  <div></div> // Hidden element when "Sign Up" is active
) : (
  <div className="forgot-password">
    Lost Password? <span>Click Here!</span>
  </div>
)}

<div className="submit-container">
  <div
    className={action === "Login" ? "submit gray" : "submit"}
    onClick={() => setAction("Sign Up")}
  >
    Sign Up
  </div>
  <div
    className={action === "Sign Up" ? "submit gray" : "submit"}
    onClick={() => setAction("Login")}
  >
    Login
  </div>
</div>

    </div>
  );
};

export default LoginSignup;
