import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Copyright = () => (
  <Typography variant="body2" color="text.secondary">
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
      Your Website
    </Link>
    {' '}
    {new Date().getFullYear()}
    .
  </Typography>
  );

const StickyFooter = () => (
  <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: '2vh',
      }}
  >
    <CssBaseline />
    <Box
      component="footer"
      sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) => (theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800]),
        }}
    >
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Box>
  </Box>
  );

  export default StickyFooter;
