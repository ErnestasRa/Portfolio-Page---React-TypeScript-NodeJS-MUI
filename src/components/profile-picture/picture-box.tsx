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
  objectFit: 'contain',
  height: 400,
  width: 400,
  borderRadius: 400,
  maxHeight: { xs: 300, md: 400 },
  maxWidth: { xs: 300, md: 400 },
}}
  />
  );

export default PictureBox;
