import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your logic for handling login (e.g., API call)
    // For demo purposes, let's assume the login is successful
    console.log('Login credentials:', { email, password });

    // Redirect to the review list page upon successful login
    history.push('/review-list');
  };

  return (
    <div>
      <form>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
