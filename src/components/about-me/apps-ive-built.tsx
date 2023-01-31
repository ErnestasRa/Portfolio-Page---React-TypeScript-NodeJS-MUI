import * as React from 'react';
import TerminalIcon from '@mui/icons-material/Terminal';
import {
    Box,
} from '@mui/material';
import Typography from '@mui/material/Typography';

const AppsIveBuilt:React.FC = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
    <TerminalIcon sx={{ fontSize: { xs: '2vh', md: '4vh' }, color: '#DEDEDE' }} />
    <Typography sx={{
      fontFamily: 'MyFont',
      mt: { xs: '1vh', md: '2vh' },
      fontWeight: 600,
      color: '#DEDEDE',
}}
    >
      My small projects
    </Typography>
  </Box>
  );

export default AppsIveBuilt;
