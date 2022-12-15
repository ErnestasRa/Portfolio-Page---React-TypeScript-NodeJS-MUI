import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';

const AboutMe: React.FC = () => (
  <Box>
    <Typography sx={{ mb: '2vh', textAlign: { md: 'inherit', xs: 'center' } }}>
      Nice to see you here, welcome!
    </Typography>
    <Typography>
      Hello, I`am Ernestas, 24 years old, motorcycle enthusiast,
      passionate PC gamer and of course,
      one of my biggest hobbies, since I was little - programming.
    </Typography>
  </Box>
  );

export default AboutMe;
