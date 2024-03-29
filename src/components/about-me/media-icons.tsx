import * as React from 'react';
import {
    Box,
    IconButton,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const MediaIcons: React.FC = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: { xs: 'center', md: 'flex-start' },
    mt: '2vh',
    }}
  >
    <IconButton href="https://www.linkedin.com/in/anarkii/">
      <LinkedInIcon sx={{ fontSize: '2rem', color: '#DEDEDE' }} />
    </IconButton>
    <IconButton href="https://www.facebook.com/R.Ernis">
      <FacebookIcon sx={{ fontSize: '2rem', color: '#DEDEDE' }} />
    </IconButton>
    <IconButton href="https://github.com/ErnestasRa">
      <GitHubIcon sx={{ fontSize: '2rem', color: '#DEDEDE' }} />
    </IconButton>
  </Box>
  );

export default MediaIcons;
