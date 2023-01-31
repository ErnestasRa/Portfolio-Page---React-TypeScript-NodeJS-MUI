import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';

type SectionComponentType = {
  title: string,
  description: string,
};

const SectionComponent:React.FC<SectionComponentType> = ({ title, description }) => (
  <Box sx={{
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    flexDirection: 'column',

  }}
  >
    <Typography sx={{
        textAlign: 'left',
        fontFamily: 'MyFont',
        color: '#E2F516',
        }}
    >
      {title}
    </Typography>
    <Typography sx={{
        textAlign: 'left',
        fontFamily: 'MyFont',
        color: 'gray',
        fontSize: '12px',
        }}
    >
      {description}
    </Typography>
  </Box>
  );

export default SectionComponent;
