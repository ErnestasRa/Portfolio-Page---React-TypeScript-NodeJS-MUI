import * as React from 'react';
import {
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import DiscordIMG from '../../images/discord.png';

const GameWithMe:React.FC = () => (
  <Box sx={{
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: { md: 'row', xs: 'column' },
    gap: 2,
  }}
  >
    <Typography
      variant="h6"
      align="center"
      fontWeight={200}
      sx={{ mt: '2vh', mb: '2vh', width: '100%' }}
    >
      Join me on my gaming adventure. Add me on Discord!
      <Box>
        <IconButton href="http://discordapp.com/users/404685539665510410">
          <Box
            component="img"
            src={DiscordIMG}
            sx={{
          width: '5vh',
          height: '5vh',
        }}
          />
        </IconButton>
      </Box>
    </Typography>
  </Box>
  );

export default GameWithMe;
