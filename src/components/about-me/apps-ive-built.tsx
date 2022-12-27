import * as React from 'react';
import TerminalIcon from '@mui/icons-material/Terminal';
import {
    Box,
} from '@mui/material';
import Typography from '@mui/material/Typography';

const AppsIveBuilt:React.FC = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <TerminalIcon sx={{ fontSize: { xs: '5vh', md: '8vh' } }} />
    <Typography sx={{
      fontFamily: 'initial',
      mt: { xs: '1vh', md: '2vh' },
      fontWeight: 600,
}}
    >
      My small projects:
    </Typography>
  </Box>
  );

export default AppsIveBuilt;
