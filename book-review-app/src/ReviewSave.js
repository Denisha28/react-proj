import React from 'react';
import { useNavigate } from 'react-router-dom';
const ReviewSave = ({ reviews }) => {
  const navigate=useNavigate();
  const handleL = (e) => {
   e.preventDefault();
   navigate('/HomePage');
  };
  return (
    <div>
      <h2>Saved Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.title} by {review.author}</strong>: {review.review}
          </li>
        ))}
      </ul>
        <button className='button' onClick={handleL} type='submit'>HOME</button>
    </div>
  );
};

export default ReviewSave;