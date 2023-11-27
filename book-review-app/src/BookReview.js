import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

export default function BookReview() {
  const [selectedBook, setSelectedBook] = React.useState(null);
  const [review, setReview] = React.useState('');

  const handleBookChange = (event, newValue) => {
    setSelectedBook(newValue);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const submitReview = () => {
    // Add logic to submit the review, e.g., send it to a server
    console.log(`Book: ${selectedBook?.label}, Review: ${review}`);

  };

  const Books = [
    { label: 'Book 1' },
    { label: 'Book 2' },
    { label: 'Book 3' },
    // Add more books as needed
  ];

  return (
    <div>
      <Autocomplete
        id="combo-box-books"
        options={Books}
        getOptionLabel={(option) => option.label}
        onChange={handleBookChange}
        renderInput={(params) => <TextField {...params} label="Select a Book" />}
      />
      <TextField
        id="outlined-multiline-static"
        label="Write a Review"
        multiline
        rows={4}
        value={review}
        onChange={handleReviewChange}
        sx={{ marginTop: 2 }}
      />
      <Button variant="contained" onClick={submitReview} sx={{ marginTop: 2 }}>
        Submit Review
      </Button>
    </div>
  );
}