import * as React from 'react';
import {
    Box, Typography,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import SwiperCore, {
  Navigation,
} from 'swiper';

SwiperCore.use([Navigation]);

type SwiperComponentType = {
  skillReact: SkillsType
  skillJS: SkillsType
  skillNode: SkillsType
  skillMongo: SkillsType
  skillCSharp: SkillsType
  skillTS: SkillsType
};

const SwiperComponent: React.FC<SwiperComponentType> = ({
  skillReact,
  skillJS,
  skillNode,
  skillMongo,
  skillCSharp,
  skillTS,
}) => (
  <Box className="App" padding={2}>
    <Box marginTop={4}>
      <Swiper
        navigation
        className="mySwiper"
        slidesPerView={2}
        spaceBetween={0}
        autoplay
      >
        {[skillReact, skillJS, skillNode, skillMongo, skillCSharp, skillTS].map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={i}>
            <Box>
              <Box
                component="img"
                src={item.image}
                sx={{
                width: { md: '20%', xs: '75%' },
                height: { md: '10vh', xs: '10vh' },
                display: 'block',
                flexDirection: { xs: 'column', md: 'column' },
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: { xs: 'center', md: 'center' },
                margin: 'auto',
              }}
              />
              <Typography sx={{
                fontFamily: 'MyFont',
                color: '#E2F516',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                }}
              >
                {item.name}

              </Typography>
              <Typography sx={{
                fontFamily: 'MyFont',
                 fontSize: '0.7rem',

                 color: 'gray',
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 width: { md: '100%', xs: '100%' },
                 }}
              >
                {item.expierence}

              </Typography>
            </Box>
          </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  </Box>
  );

export default SwiperComponent;
