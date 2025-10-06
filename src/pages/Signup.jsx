import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

export default function Signup() {
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 3, bgcolor: 'white', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>
      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />
      <Button variant="contained" fullWidth sx={{ mt: 2 }}>
        Create Account
      </Button>
    </Box>
  );
}