import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const ContactMe:React.FC = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <MailOutlineIcon sx={{ fontSize: { xs: '5vh', md: '7vh' } }} />
    <Typography sx={{ fontFamily: 'cursive', mt: { xs: '1vh', md: '2vh' } }}>Contact me:</Typography>
  </Box>
  );

export default ContactMe;
