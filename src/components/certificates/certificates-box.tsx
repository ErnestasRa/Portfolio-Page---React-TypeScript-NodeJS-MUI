import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type CertificatesBoxType = {
    title: string,
    description: string
    image: string | undefined
};

const CertificatesBox:React.FC<CertificatesBoxType> = ({ title, description, image }) => (
  <Card sx={{
    maxWidth: 300,
    mb: '1vh',
    textAlign: 'center',
    bgcolor: '#202020',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'MyFont',
}}
  >
    <CardMedia
      component="img"
      alt="green iguana"
      height="120"
      image={image}
      sx={{ objectFit: 'fill' }}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{ color: '#E2F516', fontFamily: 'MyFont' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="gray">
        {description}
      </Typography>
    </CardContent>
  </Card>
  );

export default CertificatesBox;
