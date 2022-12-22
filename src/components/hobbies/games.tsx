import * as React from 'react';
import {
  Box,
} from '@mui/material';
import League from './games/league-of-legends';
import CSGO from './games/cs-go';
import OSRSComponent from './games/osrs';

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
    <Box sx={{ width: { xs: '100%', md: '33%' } }}>
      <OSRSComponent />
    </Box>
  </Box>
  );

export default GamingHobby;
