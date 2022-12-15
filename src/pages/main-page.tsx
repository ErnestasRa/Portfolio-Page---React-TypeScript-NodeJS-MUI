import * as React from 'react';
import {
  Container,
  Paper,
} from '@mui/material';
import PictureBox from 'components/profile-picture/picture-box';
import AboutMe from 'components/about-me/about-me';
import ResponsiveAppBar from '../components/form-controls/app-bar';

const MainPage: React.FC = () => (
  <Container>
    <ResponsiveAppBar />
    <Paper sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignContent: 'center',
      alignItems: { xs: 'center', md: 'center' },
      mt: '3vh',
    }}
    >
      <PictureBox />
      <AboutMe />
    </Paper>
  </Container>
);
export default MainPage;
