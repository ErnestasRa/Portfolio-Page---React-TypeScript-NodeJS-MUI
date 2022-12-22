import * as React from 'react';
import {
  Container,
  Paper,
  Typography,
} from '@mui/material';
import ResponsiveAppBar from 'components/app-bar/app-bar';
import StickyFooter from 'components/footer/footer';
import Motorcycles from 'components/hobbies/motorcycle-hobby';
import GamingHobby from 'components/hobbies/games';
import GameWithMe from 'components/game-with-me/game-with-me';

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
      <Typography
        variant="h5"
        align="center"
        fontWeight={600}
        sx={{ mt: '2vh', mb: '2vh' }}
      >
        Games
      </Typography>
      <GamingHobby />
    </Paper>

    <Paper sx={{ mt: '2vh' }}>
      <GameWithMe />
    </Paper>

    <StickyFooter />
  </Container>
  );

export default MyHobbies;
