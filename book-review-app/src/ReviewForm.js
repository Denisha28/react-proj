import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const ReviewForm = ({ onReviewSubmit }) => {
  const navigate=useNavigate();
  const handleL = (e) => {
   e.preventDefault();
   navigate('/Thanks');
  };
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('submitted');

    try {
      const response = await axios.post('http://localhost:8000/posts', {
        title,
        author,
        review,
      });

      
      const savedReview = response.data;

      // Clear the form
      setTitle('');
      setAuthor('');
      setReview('');

      // Notify the parent component about the new review
      onReviewSubmit(savedReview);
    } catch (error) {
      console.error('Error saving review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='cb'>
      <label>
        Book:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br/>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <br />
      <label>
        Review:
        <textarea value={review} onChange={(e) => setReview(e.target.value)} />
      </label>
      <br />
      <br/>
      <button className='button' type="submit" onClick={handleSubmit} >Submit Review</button>
      &nbsp; &nbsp; &nbsp;
      <button className='button' type='submit'  onClick={handleL} >DONE</button>
    </form>
  );
};

export default ReviewForm;