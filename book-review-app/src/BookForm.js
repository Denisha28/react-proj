import React, { useState } from 'react';

const BookForm = ({ onAddReview }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields
    if (!title || !author || !review) {
      alert('Please fill in all fields');
      return;
    }

    // Pass the form data to the parent component
    onAddReview({ title, author, review });

    // Clear the form fields
    setTitle('');
    setAuthor('');
    setReview('');
  };

  return (
    <div>
      <h2>Book Review Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

        <label>Review:</label>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} />

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default BookForm;