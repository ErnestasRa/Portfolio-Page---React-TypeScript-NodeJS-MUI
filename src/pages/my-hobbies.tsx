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
    <Paper>
      Hi
    </Paper>
    <StickyFooter />
  </Container>
  );

export default MyHobbies;
