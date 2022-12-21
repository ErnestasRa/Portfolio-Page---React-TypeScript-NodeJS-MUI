import * as React from 'react';
import {
    Box,
    IconButton,
    Link,
    Typography,
} from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import resume from '../../modules/main.pdf';

const MyResume:React.FC = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: { xs: 'center', md: 'flex-start' },
    mt: '2vh',
    }}
  >
    <Typography sx={{ textAlign: { md: 'inherit', xs: 'center' }, fontFamily: 'cursive', mt: '1.1vh' }}>
      My Resume:
    </Typography>
    <IconButton>
      <Link href={resume} download>
        <CloudDownloadIcon sx={{ fontSize: '2.0rem', color: 'grey' }} />
      </Link>
    </IconButton>
  </Box>
  );

export default MyResume;
