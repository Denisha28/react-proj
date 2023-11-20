import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;