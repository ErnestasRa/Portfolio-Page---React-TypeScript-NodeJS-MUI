import * as React from 'react';
import {
  Box,
} from '@mui/material';
import League from './games/league-of-legends';
import CSGO from './games/cs-go';

const GamingHobby:React.FC = () => (
  <Box sx={{
    gap: 2,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    }}
  >
    <Box sx={{ width: { xs: '100%', md: '33%' } }}>
      <League />
    </Box>
    <Box sx={{ width: { xs: '100%', md: '33%' } }}>
      <CSGO />
    </Box>
  </Box>
  );

export default GamingHobby;
