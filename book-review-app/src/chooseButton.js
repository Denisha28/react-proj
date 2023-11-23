import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const chooseButton = ({ onchooseButton }) => {
 const navigate=useNavigate();

const handleL = (e) => {
    e.preventDefault();
    navigate('/BookForm');
   };
   return (
       <div>
        <button type='chooseButton' onClick={handleL}>GIVE REVIEW</button>
    </div>
  );
};

export default chooseButton;