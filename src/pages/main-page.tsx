import * as React from 'react';
import {
  Container,
  Paper,
} from '@mui/material';
import PictureBox from 'components/profile-picture/picture-box';
import AboutMe from 'components/about-me/about-me';
import AppsIveBuilt from 'components/about-me/apps-ive-built';
import ContactMe from 'components/contact-me/contact-me';
import ContactMeInputs from 'components/contact-me/contact-me-inputs';
import AppsIveBuiltSection from 'components/my-apps/apps-ive-build-section';
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
    <Paper sx={{ mt: '2vh' }}>
      <AppsIveBuilt />
      <AppsIveBuiltSection />
    </Paper>
    <Paper sx={{
    mt: '2vh',
    display: 'flex',
    flexDirection: 'column',
  }}
    >
      <ContactMe />
      <ContactMeInputs />
    </Paper>
  </Container>
);
export default MainPage;
