import * as React from 'react';
import {
  Container,
  Paper,
} from '@mui/material';
import ResponsiveAppBar from 'components/app-bar/app-bar';
import StickyFooter from 'components/footer/footer';

const MyHobbies:React.FC = () => (
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
      Hi
    </Paper>
    <StickyFooter />
  </Container>
  );

export default MyHobbies;
