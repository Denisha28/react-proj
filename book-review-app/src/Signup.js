import React, { useState } from 'react';

const SignUp = ({ onSignUp }) => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ Username, password });
  };

  return (
    <div>
        <br/>
      <h2>Sign Up</h2>
      <br/>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={
            Username
          } onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;