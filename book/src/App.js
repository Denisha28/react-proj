// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import { FirebaseApp } from 'firebase/app';
import Login from './components/Login';
import Signup from './components/Signup';
import BookDetails from './components/BookDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/books/:id" component={BookDetails} />
      </Switch>
    </Router>
  );
};

export default App;
