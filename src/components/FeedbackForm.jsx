import React, { useState } from 'react';
import { Box, TextField, Rating, Typography, Button, Snackbar, Alert } from '@mui/material';

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rating:", rating, "Comment:", comment);
    setSnackbarOpen(true);
    setRating(0);
    setComment('');
  };

  return (
    <Box sx={{ p: 3}}>
      <Typography variant="h6" gutterBottom>Leave Feedback</Typography>

      <Rating
        name="rating"
        value={rating}
        precision={0.5}
        onChange={(event, newValue) => setRating(newValue)}
      />
      <TextField
        fullWidth
        multiline
        rows={3}
        margin="normal"
        label="Your comments"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Submit Feedback
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success" onClose={() => setSnackbarOpen(false)}>
          Feedback submitted!
        </Alert>
      </Snackbar>
    </Box>
  );
}
