import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';

const OSRSComponent:React.FC = () => (
  <Box>
    <Box
      component="img"
      src="https://oldschool.runescape.wiki/images/thumb/Old_School_RuneScape_logo.png/800px-Old_School_RuneScape_logo.png?1d864"
      sx={{
      width: { xs: '75%', md: '60%' },
      height: { xs: '10vh', md: '10vh' },
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      textAlign: 'center',
      margin: 'auto',
    }}
    />
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mb: '1vh', mt: '2vh', margin: '1vh' }}
    >
      One of my favourite games of all time. Runescape.
      Grew up playing it and I will get old playing it.
    </Typography>
  </Box>
  );

export default OSRSComponent;
