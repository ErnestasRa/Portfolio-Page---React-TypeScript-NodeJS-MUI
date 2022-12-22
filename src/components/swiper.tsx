import * as React from 'react';
import {
    Box,
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

type SwiperComponentType = {
  image1?: string | undefined
  image2?: string | undefined
  image3?: string | undefined
};

const SwiperComponent: React.FC<SwiperComponentType> = ({ image1, image2, image3 }) => (
  <Box className="App" padding={2}>
    <Box marginTop={4}>
      <Swiper navigation className="mySwiper">
        {[image1, image2, image3].map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={i}>
            <Box
              component="img"
              src={item}
              sx={{
                width: { md: '30%', xs: '75%' },
                height: { md: '40vh', xs: '34vh' },
                display: 'block',
                flexDirection: { xs: 'column', md: 'column' },
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: { xs: 'center', md: 'center' },
                margin: 'auto',
              }}
            />
          </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  </Box>
  );

export default SwiperComponent;
