import * as React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import League from './games/league-of-legends';
import CSGO from './games/cs-go';

const GamingHobby:React.FC = () => (
  <Box sx={{ gap: 2 }}>
    <Typography
      variant="h4"
      align="center"
      fontWeight={700}
      sx={{ mt: '2vh', mb: '2vh' }}
    >
      Gaming
    </Typography>
    <League />
    <CSGO />
  </Box>
  );

export default GamingHobby;
