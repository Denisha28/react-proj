import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h2>Saved Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.book}</strong>: {review.review}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
