import React from 'react';

const BookList = ({ books, onBookClick }) => {
  return (
    <ul book>
      {books.map((book) => (
        <li key={book.id} onClick={() => onBookClick(book.id)}>
          {book.title}
        </li>
      ))}
    </ul>
  );
};

export default BookList;