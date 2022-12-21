import * as React from 'react';
import {
    Box,
    Container,
} from '@mui/material';
import ResponsiveAppBar from 'components/app-bar/app-bar';
import StickyFooter from 'components/footer/footer';

const MyResume:React.FC = () => (
  <Container>
    <ResponsiveAppBar />
    <Box>MyResume</Box>
    <StickyFooter />
  </Container>
  );

export default MyResume;
