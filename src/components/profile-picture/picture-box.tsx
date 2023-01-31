import * as React from 'react';
import {
    Box,
} from '@mui/material';
import code from '../../images/code.png';

type PictureBoxType = {
  picture?: string | undefined
};

const PictureBox: React.FC<PictureBoxType> = () => (
  <Box
    alt="my profile image"
    component="img"
    src={code}
    sx={{
  objectFit: 'contain',
  height: 250,
  width: { xs: '100%', md: '50%' },
}}
  />
  );

export default PictureBox;
