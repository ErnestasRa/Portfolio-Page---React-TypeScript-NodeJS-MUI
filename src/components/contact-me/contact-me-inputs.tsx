import * as React from 'react';
import {
    Box,
    TextField,
    Button,
} from '@mui/material';

const ContactMeInputs: React.FC = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    width: { xs: '100%', md: '50%' },
  }}
  >
    <TextField id="standard-basic" label="Name" variant="standard" />
    <TextField id="standard-basic" label="Email" variant="standard" />
    <TextField
      id="standard-multiline-static"
      label="Message"
      multiline
      rows={4}
      variant="standard"
    />
    <Button>Send me a message!</Button>
  </Box>
  );

export default ContactMeInputs;
