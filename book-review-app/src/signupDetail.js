import React, { useState } from 'react';
import { Routes,Route, useNavigate, BrowserRouter } from 'react-router-dom';
const SignUp = ({ onSignUp }) => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleL = (e) => {
   e.preventDefault();
   navigate('/login');
  };
  return (
    <div>
      <form >
        <label>
         Email:
          <input type="email" value={
            Username
          } onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className='button' type="submit" onClick={handleL}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;