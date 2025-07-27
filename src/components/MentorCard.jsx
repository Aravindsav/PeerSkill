import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip, Rating } from '@mui/material';

export default function MentorCard({ name, skills, rating, imageUrl, onBook }) {
  return (
    <Card sx={{ width: 300, m: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={imageUrl}
        alt={name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>{name}</Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} color="primary" size="small" />
          ))}
        </Box>

        <Rating value={rating} precision={0.5} readOnly />

        <Box mt={2}>
          <Button variant="contained" fullWidth onClick={onBook}>
            Book Session
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
