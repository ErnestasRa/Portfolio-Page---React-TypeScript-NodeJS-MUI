import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import MediaIcons from './media-icons';

const AboutMe: React.FC = () => (
  <Box>
    <Typography sx={{ mb: '2vh', fontFamily: 'cursive', textAlign: { md: 'inherit', xs: 'center' } }}>
      Nice to see you here, welcome!
    </Typography>
    <Typography sx={{
 mb: '2vh', fontFamily: 'cursive', fontSize: '0.9rem', textAlign: { md: 'inherit', xs: 'center' },
    }}
    >
      Hello, I`am Ernestas, 24 years old, motorcycle enthusiast,
      passionate PC gamer and of course,
      one of my biggest hobbies, since I was little - programming.
    </Typography>
    <Typography sx={{ textAlign: { md: 'inherit', xs: 'center' }, fontFamily: 'cursive' }}>
      I`am React with TypeScript MERN stack Developer.
    </Typography>
    <MediaIcons />
  </Box>
  );

export default AboutMe;
