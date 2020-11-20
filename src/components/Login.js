import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (event) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch(error => alert(error.message))
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch(error => alert(error.message));
  };

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
        <input type="text" className="login__user" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" className="login__password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={(event) => signIn(event)}>Sign in</button>
        <small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>

        <button onClick={(event) => register(event)}>Create your Amazon account</button>
      </div>
      
    </div>
  );
};

export default Login;
