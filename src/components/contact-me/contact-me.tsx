import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const ContactMe:React.FC = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <MailOutlineIcon sx={{ fontSize: { xs: '5vh', md: '7vh' }, color: '#DEDEDE' }} />
    <Typography sx={{
      fontFamily: 'initial',
      mt: { xs: '1vh', md: '2vh' },
      fontWeight: 600,
      color: '#DEDEDE',
}}
    >
      Contact me
    </Typography>
  </Box>
  );

export default ContactMe;
