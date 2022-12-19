import * as React from 'react';
import {
  Container,
  Paper,
  Box,
} from '@mui/material';
import PictureBox from 'components/profile-picture/picture-box';
import AboutMe from 'components/about-me/about-me';
import AppsIveBuilt from 'components/about-me/apps-ive-built';
import AppMediaCard from 'components/my-apps/apps-box';
import ContactMe from 'components/contact-me/contact-me';
import ResponsiveAppBar from '../components/form-controls/app-bar';
import BudgetTwitter from '../images/budgettwitter.jpg';
import GameRock from '../images/gamerock.jpg';
import PortfolioPic from '../images/portfoliopic.jpg';

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
      <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
        <AppMediaCard
          image={BudgetTwitter}
          title="Budget Twitter"
          description="Budget Twitter - made with React, NodeJS, MongoDB, JEST, MaterialUI, Authorization, Middleware etc."
          link="https://github.com/ErnestasRa/Final-Post-Page-made-with-React-NodeJS-MongoDB-Material-UI"
        />
        <AppMediaCard
          image={GameRock}
          title="Rock-Paper-Scissors"
          description="Rock-Paper-Scissors - made with React, NodeJS, MongoDB, GameLogic, authorization etc.."
          link="https://github.com/ErnestasRa/Simple-rock-paper-scissors-game-made-with-React-NodeJS-MongoDB-Login-session-cookies-and-game-logic"
        />
        <AppMediaCard
          image={PortfolioPic}
          title="My Portfolio"
          description="My Portfolio - Made with TypeScript, React, NodeJS, MongoDB, JEST, MaterialUI, Eslint(AirBnb) etc."
          link="https://github.com/ErnestasRa/Portfolio-Page---React-TypeScript-NodeJS-MUI"
        />
      </Box>
    </Paper>
    <Paper>
      <ContactMe />
    </Paper>
  </Container>
);
export default MainPage;
