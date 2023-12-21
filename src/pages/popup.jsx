import React, { useState } from 'react';
import '../App.css';
import { MdOutlineClose } from "react-icons/md";
import login from "../sources/login.png";
import { Link, useNavigate } from 'react-router-dom';

const Popup = ({ onClose, isPopupVisible }) => {
  const [isSignUp, setSignUp] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    if (isSignUp) {
      // Handle sign-up logic here
    } else {
      // Handle sign-in logic here
    }
    
    navigate('/home');
  };

  const handleToggleSignIn = () => {
    setSignUp(!isSignUp);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div id="overlay" className="overlay" style={{ display: isPopupVisible ? 'flex' : 'none' }}>
      <div id="popup" className="popup">
        <div className="close-btn" onClick={handleClose}>
        <MdOutlineClose />
        </div>
        <div className='div1'>
          <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required /><br />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required /><br />
              </>
            )}

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required /><br />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required /><br />

            <button type="submit">{isSignUp ? 'Create Account' : 'Sign In'}</button>
          </form>
        </div>
        <div className='div2'>
          <p style={{ position: "relative", right: "40%" }}>
            {isSignUp
              ? "Already have an account?"
              : "Don't have an account?"}
          </p>
          <a onClick={handleToggleSignIn} style={{ position: "absolute", color: "blue", top: "3.8%", cursor: "pointer",left:"60%"}}>
            <nobr >{isSignUp ? 'Sign In' : 'Create Account'}</nobr>
          </a>
        </div>
        <img src={login} className='login-img' alt=""></img>
        <div className='p555'>
          <p>
            By {isSignUp ? 'Signing Up' : 'Signing In'} you're agreeing to our <br></br>
            Terms & Conditions, Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
