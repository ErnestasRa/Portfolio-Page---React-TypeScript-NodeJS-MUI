import * as React from 'react';
import {
    Box,
    TextField,
    Button,
} from '@mui/material';

const ContactMeInputs: React.FC = () => (
  <Box sx={{
    display: 'flex',
    justifyContent: { md: 'center', xs: 'center' },
    alignItems: { md: 'center', xs: 'center' },
    flexDirection: 'column',
    gap: 2,
    width: { xs: '100%', md: '100%' },

  }}
  >
    <TextField
      id="standard-basic"
      label="Name"
      variant="standard"
      sx={{ width: { xs: '80%', md: '50vh' } }}
    />
    <TextField
      id="standard-basic"
      label="Email"
      variant="standard"
      sx={{ width: { xs: '80%', md: '50vh' } }}
    />
    <TextField
      id="standard-multiline-static"
      label="Message"
      multiline
      rows={4}
      variant="standard"
      sx={{ width: { xs: '80%', md: '50vh' } }}
    />
    <Button>Send me a message!</Button>
  </Box>
  );

export default ContactMeInputs;
