import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Paper, Button } from '@mui/material';
import './book.css';
import HomePage from './HomePage';
import LoginPage from './Login';
import SignUpPage from './Signup';
import Choose from './Choose';
import Thanks from './Thanks';
import ReviewForm from './ReviewForm';
import ReviewSave from './ReviewSave';
function App() {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <Router>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Book Review App
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
          <Button component={Link} to="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 2 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/Choose' element={<Choose/>}/>
            <Route path='/Thanks' element={<Thanks/>}/>
            <Route path='/HomePage' element={<HomePage/>}/>
            <Route path='/ReviewForm' element={<ReviewForm onReviewSubmit={handleReviewSubmit}/>}/>
            <Route path='/ReviewSave' element={<ReviewSave reviews={reviews}/>}/>
          </Routes>
        </Paper>
      </Container>
    </Router>
  );
}

export default App;