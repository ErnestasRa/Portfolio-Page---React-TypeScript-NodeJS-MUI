import * as React from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
} from '@mui/material';
import post from 'functions/http';

type ContactMeInputsType = {
  current: HTMLInputElement | null
};

type MessageDataType = {
  name: string,
  email: string,
  message: string,
};

const ContactMeInputs: React.FC = () => {
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const nameRef: ContactMeInputsType = React.useRef(null);
  const emailRef: ContactMeInputsType = React.useRef(null);
  const messageRef: ContactMeInputsType = React.useRef(null);

  const createMessage = async () => {
    const messageData: MessageDataType = {
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      message: messageRef.current!.value,
    };
    const res = await post('contactme', messageData);

    if (res.error) {
      setErrorMessage(res.message);
      setError(true);
    } else {
      setError(false);
      setErrorMessage('');
      nameRef.current!.value = '';
      emailRef.current!.value = '';
      messageRef.current!.value = '';
    }
  };

return (
  <Box sx={{
    display: 'flex',
    justifyContent: { md: 'center', xs: 'center' },
    alignItems: { md: 'center', xs: 'center' },
    flexDirection: 'column',
    gap: 2,
    width: { xs: '100%', md: '100%' },
    color: 'red',
  }}
  >
    <TextField
      id="standard-basic"
      label="Name"
      inputRef={nameRef}
      error={error}
      variant="standard"
      sx={{ width: { xs: '80%', md: '50vh' }, input: { color: '#DEDEDE' } }}
      InputLabelProps={{ sx: { color: '#DEDEDE' } }}
    />
    <TextField
      id="standard-basic"
      label="Email"
      error={error}
      inputRef={emailRef}
      variant="standard"
      sx={{ width: { xs: '80%', md: '50vh' }, input: { color: '#DEDEDE' } }}
      InputLabelProps={{ sx: { color: '#DEDEDE' } }}
    />
    <TextField
      id="standard-multiline-static"
      label="Message"
      inputRef={messageRef}
      error={error}
      rows={4}
      variant="standard"
      InputLabelProps={{ sx: { color: '#DEDEDE' } }}
      sx={{ width: { xs: '80%', md: '50vh' }, input: { color: '#DEDEDE' } }}
    />
    <Typography sx={{ color: 'red' }}>{errorMessage}</Typography>
    <Button onClick={() => createMessage()}>Send me a message!</Button>
  </Box>
  );
};
export default ContactMeInputs;
