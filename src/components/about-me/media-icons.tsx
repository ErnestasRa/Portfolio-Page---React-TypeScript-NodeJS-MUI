import * as React from 'react';
import {
    Box,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const MediaIcons: React.FC = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: { xs: 'center', md: 'flex-start' },
    }}
  >
    <LinkedInIcon sx={{ fontSize: '2.5rem' }} />
    <FacebookIcon sx={{ fontSize: '2.5rem' }} />
    <GitHubIcon sx={{ fontSize: '2.5rem' }} />
  </Box>
  );

export default MediaIcons;
