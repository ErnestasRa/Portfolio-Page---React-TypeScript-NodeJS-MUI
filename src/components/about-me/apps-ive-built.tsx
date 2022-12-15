import * as React from 'react';
import TerminalIcon from '@mui/icons-material/Terminal';
import {
    Box,
} from '@mui/material';
import Typography from '@mui/material/Typography';

const AppsIveBuilt:React.FC = () => (
  <Box sx={{ display: 'flex' }}>
    <TerminalIcon sx={{ fontSize: { xs: '5vh', md: '8vh' } }} />
    <Typography>Apps I`ve built:</Typography>
  </Box>
  );

export default AppsIveBuilt;
// TODO - Fix apps ive built icon
