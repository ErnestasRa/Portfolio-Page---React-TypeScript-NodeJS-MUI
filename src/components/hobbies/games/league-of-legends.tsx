import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import LeaguePic from '../../../images/lol.png';

const League:React.FC = () => (
  <Box>
    <Box
      component="img"
      src={LeaguePic}
      sx={{
      width: { xs: '75%', md: '30%' },
      height: { xs: '10vh', md: '10vh' },
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
      In season 3 of League of Legends peaked at Challenger rank.
      Won first place at Best Riven Lithuania Tournament.
      Was a tryout for Team Bleiz as a Toplaner.
    </Typography>
  </Box>
  );

export default League;
