import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, TextField, Button, MenuItem } from '@mui/material';

const availableMentors = ['Aravind Sai', 'Riya Sharma', 'Vikram Iyer']; // or fetch from your data

export default function BookSessionForm() {
  const location = useLocation();
  const preselectedMentor = location.state?.mentor?.name || '';

  const [mentor, setMentor] = useState(preselectedMentor);
  const [skill, setSkill] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Session booked with ${mentor} on ${date} for ${skill}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Book a Session</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          select
          label="Select Mentor"
          fullWidth
          value={mentor}
          onChange={(e) => setMentor(e.target.value)}
          sx={{ mb: 2 }}
        >
          {availableMentors.map((name, index) => (
            <MenuItem key={index} value={name}>{name}</MenuItem>
          ))}
        </TextField>

        <TextField
          label="Skill / Topic"
          fullWidth
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Date"
          type="date"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Book Session
        </Button>
      </form>
    </Box>
  );
}
