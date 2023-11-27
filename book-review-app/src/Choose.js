import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Choose = () => {
  const location=useLocation();
  const name=location.state.text;
    const navigate=useNavigate();
      const handleL = (e) => {
       e.preventDefault();
       navigate('/ReviewForm');
      };
      const handleL1 = (e) => {
       e.preventDefault();
       navigate('/ReviewSave');
      };
   return (
      
       <div>
        <h1>Welcome {name}!!</h1>
        <button type='submit' onClick={handleL} style={{
          backgroundColor: '#4caf50',
          border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '10px',
          cursor: 'pointer',
          borderRadius: '5px',
        }}>GIVE REVIEW</button>
        <button type='submit' onClick={handleL1} style={{
          backgroundColor: '#4caf50',
          border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '10px',
          cursor: 'pointer',
          borderRadius: '5px',
        }}>VIEW REVIEW</button>
    </div>
  );
};

export default Choose;