import React, { useState } from 'react';
import { Routes,Route, useNavigate, BrowserRouter } from 'react-router-dom';
const Login = ({ onLogin }) => {
  const [text,setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  const navigate=useNavigate();
   const handleL = (e) => {
    e.preventDefault();
    navigate('/Choose',{state: {text}});
   };

  return (
    <div>
      <form >
        <label className='form'>
          Username:
          <input type="text" value={text} onChange={(e) => setEmail(e.target.value)} />
        </label>
        
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className='button'  type="submit" onClick={handleL}>Login</button>
        
      </form>
    </div>
  );
};

export default Login;