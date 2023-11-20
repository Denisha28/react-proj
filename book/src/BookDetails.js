// src/components/BookDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Book Details</h2>
      <p>Book ID: {id}</p>
      {/* Display other book details based on the ID */}
    </div>
  );
};

export default BookDetails;
