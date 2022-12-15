import * as React from 'react';
import {
    Box,
} from '@mui/material';
import ProfilePic from '../../images/profile-pic.jpg';

const PictureBox: React.FC = () => (
  <Box
    alt="my profile image"
    component="img"
    src={ProfilePic}
    sx={{
  margin: '2vh',
  objectFit: 'cover',
  height: 250,
  width: 250,
  borderRadius: { xs: 50, md: 2000 },
  maxHeight: { xs: 150, md: 300 },
  maxWidth: { xs: 150, md: 300 },
}}
  />
  );

export default PictureBox;
