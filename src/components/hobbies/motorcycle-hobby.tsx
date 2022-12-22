import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import SwiperComponent from '../swiper';
import bike1 from '../../images/bike1.jpg';
import bike2 from '../../images/bike2.jpg';
import bike3 from '../../images/bike3.jpg';

const Motorcycles: React.FC = () => (
  <Box sx={{
    width: '100%',

    }}
  >
    <Typography
      variant="h4"
      align="center"
      fontWeight={700}
      sx={{ mt: '2vh' }}
    >
      Motorcycles
    </Typography>
    <SwiperComponent
      image1={bike1}
      image2={bike2}
      image3={bike3}
    />
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mb: '1vh' }}
    >
      Motorcycles were one of my biggest hobbies since childhood.
      Grew up on a bike, made a lot of friends while riding.
    </Typography>
  </Box>
  );

export default Motorcycles;
