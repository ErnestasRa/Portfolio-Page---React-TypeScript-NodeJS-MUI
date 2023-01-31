import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import MediaIcons from './media-icons';

const AboutMe: React.FC = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    width: { xs: '100%', md: '35%' },
  }}
  >
    <Typography sx={{
      textAlign: { md: 'inherit', xs: 'center' },
      color: 'gray',
      fontFamily: 'MyFont',
      fontSize: '0.8rem',

}}
    >
      Hi, I`m
      {' '}
    </Typography>
    <Typography sx={{
      color: '#E2F516',
      fontSize: '2rem',
      fontFamily: 'monospace',
      textAlign: { md: 'inherit', xs: 'center' },
      width: { xs: '100%', md: '30%' },
      fontWeight: '500',

}}
    >
      Ernestas,
      {' '}
    </Typography>

    <Typography sx={{
      textAlign: { md: 'inherit', xs: 'center' },
      color: 'gray',
      fontFamily: 'MyFont',
}}
    >
      Full-Stack React Developer
    </Typography>

    <MediaIcons />
  </Box>
  );

export default AboutMe;
