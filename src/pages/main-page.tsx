import * as React from 'react';
import {
  Container,
  Box,
} from '@mui/material';
import ResponsiveAppBar from '../components/form-controls/app-bar';

const MainPage: React.FC = () => (
  <Container>
    <ResponsiveAppBar />
    <Box>hi</Box>
  </Container>
);

export default MainPage;
