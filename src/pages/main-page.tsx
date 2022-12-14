import * as React from 'react';
import {
  Container,
  Box,
} from '@mui/material';
import ResponsiveAppBar from '../components/form-controls/app-bar';
import { get } from '../functions/http';
import ProfilePic from '../images/profile-pic.jpg';

const MainPage: React.FC = () => {
  const getProfilePicture = async () => {
    const res = await get('profilepic');
    console.log(res);
  };

  React.useEffect(() => {
    getProfilePicture();
  }, []);

return (
  <Container>
    <ResponsiveAppBar />
    <Box
      alt="my profile image"
      component="img"
      src={ProfilePic}
      sx={{
      objectFit: 'contain',
      height: 300,
      width: 300,
      borderRadius: 100,
      maxHeight: { xs: 233, md: 167 },
      maxWidth: { xs: 350, md: 250 },
    }}

    />

  </Container>
);
};
export default MainPage;
