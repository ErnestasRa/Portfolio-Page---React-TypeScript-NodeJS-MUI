import * as React from 'react';
import {
  Box,
} from '@mui/material';
import AppMediaCard from 'components/my-apps/apps-box';
import GameRock from '../../images/gamerock.jpg';
import PortfolioPic from '../../images/portfoliopic.jpg';
import ReactTable from '../../images/reacttable.jpg';

const AppsIveBuiltSection:React.FC = () => (
  <Box sx={{
    display: 'flex',
    gap: 3,
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    mt: '2vh',
     }}
  >
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
    <AppMediaCard
      image={ReactTable}
      title="React Table"
      description="Data Fetch from API. Filtering, sorting, Pagination. Made with Typescript, React"
      link="https://github.com/ErnestasRa/Internship-task--with-React-Typecript"
    />
  </Box>
  );

export default AppsIveBuiltSection;
