import * as React from "react";
import {
  Container,
  Box,
  Paper,
} from '@mui/material'
import ResponsiveAppBar from "../components/form-controls/app-bar";

const MainPage: React.FC = () => {
  return <Container>
    <ResponsiveAppBar />
    <Box>Hi</Box>
  </Container>
};

export default MainPage;
