import React, { useState } from 'react';
import Login from './Login';
import SignUp from './Signup';
import BookList from './BookList';
import BookDetail from './BookDetail';
import ReviewForm from './ReviewForm';
import './App.css';
import './book.css';
const App = () => {
  const [user, setUser] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [reviews, setReviews] = useState({});

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleSignUp = (userData) => {
    setUser(userData);
  };

  const handleBookClick = (bookId) => {
    setSelectedBook(books.find((book) => book.id === bookId));
  };

  const handleReviewSubmit = (review) => {
    setReviews({ ...reviews, [selectedBook.id]: review });
  };

  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', description: 'Description 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', description: 'Description 2' },
  ];

  return (
    <div>
      {!user ? (
        <div>
          <Login onLogin={handleLogin} />
          <SignUp onSignUp={handleSignUp} />
        </div>
      ) : (
        <div>
          <h1>Welcome, {user.email}!</h1>
          <BookList books={books} onBookClick={handleBookClick} />
          {selectedBook && (
            <div>
              <BookDetail book={selectedBook} />
              <ReviewForm onSubmit={handleReviewSubmit} />
              <p>Reviews: {reviews[selectedBook.id]}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;