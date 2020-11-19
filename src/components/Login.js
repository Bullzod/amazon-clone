import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <Link to='/'>
        <img 
          className="login__logo" 
          src="https://www.digitale-leute.de/app/uploads/2019/01/amazon-logo-transparent.png" 
          alt="amazon_logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <label>Email or mobile phone number</label>
        <input type="text" className="login__user" />
        <label>Password</label>
        <input type="password" className="login__password" />
        <button>Sign in</button>
        <small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>

        <button>Create your Amazon account</button>
      </div>
      
    </div>
  );
};

export default Login;
