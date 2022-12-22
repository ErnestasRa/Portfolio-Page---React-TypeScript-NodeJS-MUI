import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, {
  Navigation,
} from 'swiper';

SwiperCore.use([Navigation]);

const SwiperComponent: React.FC = () => (
  <Box className="App" padding={2}>
    <Typography
      variant="h4"
      align="center"
      fontWeight={700}
    >
      Swiper + Material-UI example
    </Typography>
    {/** Slider main container */}
    <Box marginTop={4}>
      <Swiper navigation className="mySwiper">
        {/** Slides */}
        {['Slide 1', 'Slide 2', 'Slide 3'].map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={i}>
            <Typography
              variant="h6"
              align="center"
            >
              {item}
            </Typography>
          </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  </Box>
  );

export default SwiperComponent;
