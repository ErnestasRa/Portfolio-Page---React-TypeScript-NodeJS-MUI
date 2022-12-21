import * as React from 'react';
import {
    Box,
} from '@mui/material';

type PictureBoxType = {
  picture?: string | undefined
};

const PictureBox: React.FC<PictureBoxType> = ({ picture }) => (
  <Box
    alt="my profile image"
    component="img"
    src={picture}
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
