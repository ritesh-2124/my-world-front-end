import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="">
      My World Pvt. Ltd.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 , backgroundImage:"url(https://res.cloudinary.com/dtks0l86r/image/upload/v1624723903/Ellipse_69_1_rftxm7.png)" }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
        you stay for so much more! 
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'A home for your portfolio, lifelong support network'}
          {' tools to help your business thrive..'}
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
          © My World Pvt. Ltd. 2019-2022
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}