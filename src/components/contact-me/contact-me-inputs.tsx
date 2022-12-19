import * as React from 'react';
import {
    Box,
    TextField,
} from '@mui/material';

const ContactMeInputs: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <TextField id="standard-basic" label="Standard" variant="standard" />
    <TextField id="standard-basic" label="Standard" variant="standard" />
  </Box>
  );

export default ContactMeInputs;
