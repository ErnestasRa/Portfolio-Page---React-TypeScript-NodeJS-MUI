import * as React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import BudgetTwitter from '../../images/budgettwitter.jpg';

const AppsBox:React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Box
      component="img"
      alt="budget-twitter"
      src={BudgetTwitter}
      sx={{
        margin: '2vh',
        objectFit: 'cover',
        height: 250,
        width: 250,
        maxHeight: { xs: 150, md: 300 },
        maxWidth: { xs: 150, md: 300 },
      }}
    />
    <Typography>Budget Twitter</Typography>
  </Box>
  );

export default AppsBox;
