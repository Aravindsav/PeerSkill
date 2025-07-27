import React, { useState } from 'react';
import {TextField,Button,Typography, Box,MenuItem,Checkbox, FormControlLabel, Snackbar, Alert,FormGroup,} from '@mui/material';

const skillsList = [
  'Data Structures',
  'Web Development',
  'Machine Learning',
  'Public Speaking',
  'UI/UX Design',
  'Cloud Computing',
  'Competetive Programming',
  'Deep Learning',
  'Gen AI'
];

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skills: [],
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillToggle = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registered Data:', formData);
    setOpenSnackbar(true);
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: 'auto',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        mt: 5,
      }}
    >
      <Typography variant="h5" mb={2}>
        Register as Mentor or Mentee
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          required
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          required
          onChange={handleChange}
        />
        <TextField
          select
          label="Role"
          name="role"
          fullWidth
          margin="normal"
          required
          onChange={handleChange}
        >
          <MenuItem value="mentor">Mentor</MenuItem>
          <MenuItem value="mentee">Mentee</MenuItem>
        </TextField>

        <Typography mt={2} variant="body1">
          Select Skills:
        </Typography>
        <FormGroup>
          {skillsList.map((skill) => (
            <FormControlLabel
              key={skill}
              control={
                <Checkbox
                  checked={formData.skills.includes(skill)}
                  onChange={() => handleSkillToggle(skill)}
                />
              }
              label={skill}
            />
          ))}
        </FormGroup>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3, backgroundColor: '#1976d2' }}
        >
          Register
        </Button>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
          Registration successful!
        </Alert>
      </Snackbar>
    </Box>
  );
}
