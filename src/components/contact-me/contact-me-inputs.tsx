import * as React from 'react';
import {
    Box,
    TextField,
    Button,
} from '@mui/material';
import post from 'functions/http';

type ContactMeInputsType = {
  current: HTMLInputElement | null
};

const ContactMeInputs: React.FC = () => {
  const nameRef: ContactMeInputsType = React.useRef(null);
  const emailRef: ContactMeInputsType = React.useRef(null);
  const messageRef: ContactMeInputsType = React.useRef(null);

  const createMessage = async () => {
    const messageData: any = {
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      message: messageRef.current!.value,
    };
    const res = await post('contactme', messageData);
    // TODO - Fix current values
    console.log(res);
  };

return (
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
      inputRef={nameRef}
      variant="standard"
      sx={{ width: { xs: '80%', md: '50vh' } }}
    />
    <TextField
      id="standard-basic"
      label="Email"
      inputRef={emailRef}
      variant="standard"
      sx={{ width: { xs: '80%', md: '50vh' } }}
    />
    <TextField
      id="standard-multiline-static"
      label="Message"
      inputRef={messageRef}
      multiline
      rows={4}
      variant="standard"
      sx={{ width: { xs: '80%', md: '50vh' } }}
    />
    <Button onClick={() => createMessage()}>Send me a message!</Button>
  </Box>
  );
};
export default ContactMeInputs;
