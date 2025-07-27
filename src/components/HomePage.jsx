import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
        background: 'linear-gradient(to right, #f0f4ff, #fceff9)',
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
        Learn. Grow. Connect.
      </Typography>

      <Typography variant="h6" sx={{ maxWidth: 600, mb: 4, color: '#444' }}>
        Connect with skilled mentors to boost your learning journey. Book 1-on-1 sessions,
        give feedback, and build valuable skills.
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate('/mentors')}
        sx={{ bgcolor: '#1976d2', '&:hover': { bgcolor: '#115293' } }}
      >
        Let's Get Started
      </Button>
    </Box>
  );
}
