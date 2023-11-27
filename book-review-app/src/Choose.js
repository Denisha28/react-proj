import React from 'react';
import { useNavigate } from 'react-router-dom';
const Choose = () => {
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
       <div className='a'>
        <button type='submit' onClick={handleL}>GIVE REVIEW</button>
        <button type='submit' onClick={handleL1}>VIEW REVIEW</button>
    </div>
  );
};

export default Choose;