import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        mt: 'auto',
        backgroundColor: '#000',
        color: '#999',
      }}
    >
      <Typography>&copy; {new Date().getFullYear()} RareKez Limited.</Typography>
    </Box>
  );
}
