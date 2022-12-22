import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import CSGOPic from '../../../images/csgo.jpg';

const CSGO:React.FC = () => (
  <Box>
    <Box
      component="img"
      src={CSGOPic}
      sx={{
      width: { xs: '75%', md: '30%' },
      height: { xs: '10vh', md: '20vh' },
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      textAlign: 'center',
      margin: 'auto',
    }}
    />
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mb: '1vh', mt: '2vh', margin: '1vh' }}
    >
      Reached Global Elite rank tons of times. Played ESEA at the A Rank for couple of years.
      Played against/with pro players like Magisk, F0rest.
    </Typography>
  </Box>
  );

export default CSGO;