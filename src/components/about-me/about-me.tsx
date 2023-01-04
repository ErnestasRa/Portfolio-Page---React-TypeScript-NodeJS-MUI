import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import MediaIcons from './media-icons';

const AboutMe: React.FC = () => (
  <Box>
    <Typography sx={{
    mb: '2vh',
    fontFamily: 'Manrope',
    color: '#DEDEDE',
    fontWeight: 600,
    textAlign: { md: 'inherit', xs: 'center' },
}}
    >
      Nice to see you here, welcome!
    </Typography>
    <Typography sx={{
      color: '#DEDEDE',
      mb: '2vh',
      fontSize: '0.8rem',
      fontWeight: 600,
      textAlign: { md: 'inherit', xs: 'center' },

}}
    >
      Hello, I`am Ernestas, 24 years old, motorcycle enthusiast,
      passionate PC gamer and of course,
      one of my biggest hobbies, since I was little - programming.
      Just recently graduated from CodeAcademy Typescript/React 1060 hours course.
    </Typography>

    <Typography sx={{
      textAlign: { md: 'inherit', xs: 'center' },
      fontWeight: 600,
      color: '#DEDEDE',
}}
    >
      I`am React with TypeScript MERN stack Developer.
    </Typography>

    <MediaIcons />
  </Box>
  );

export default AboutMe;
