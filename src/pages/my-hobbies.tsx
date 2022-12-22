import * as React from 'react';
import {
  Container,
  Paper,
} from '@mui/material';
import ResponsiveAppBar from 'components/app-bar/app-bar';
import StickyFooter from 'components/footer/footer';
import Motorcycles from 'components/hobbies/motorcycle-hobby';
import GamingHobby from 'components/hobbies/games';

const MyHobbies:React.FC = () => (
  <Container>
    <ResponsiveAppBar />
    <Paper sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'column' },
      alignContent: 'center',
      alignItems: { xs: 'center', md: 'center' },
      mt: '3vh',
    }}
    >
      <Motorcycles />
    </Paper>
    <Paper sx={{ mt: '2vh' }}>
      <GamingHobby />
    </Paper>
    <StickyFooter />
  </Container>
  );

export default MyHobbies;
