import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MentorList from './components/MentorList';
import RegisterForm from './components/RegistrationForm';
import BookSessionForm from './components/BookSessionForm';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentors" element={<MentorList />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/book" element={<BookSessionForm />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;
