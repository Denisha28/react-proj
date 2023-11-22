import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h2>Book Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.title}</strong> by {review.author}: {review.review}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
