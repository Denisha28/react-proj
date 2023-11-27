import React from 'react';
import { useNavigate } from 'react-router-dom';
const Thanks = () => {
    const navigate=useNavigate();
      const handleL = (e) => {
       e.preventDefault();
       navigate('/HomePage');
      };
   return (
       <div>
        <h1>Thank You for your review </h1>
        <button type='submit' onClick={handleL}>HOME</button>
    </div>
  );
};

export default Thanks;