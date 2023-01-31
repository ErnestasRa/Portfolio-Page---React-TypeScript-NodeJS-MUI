import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from '@mui/material';

type AppMediaCardType = {
  image: string,
  title: string,
  description: string,
  link: string,
};

const AppMediaCard:React.FC<AppMediaCardType> = ({
    image,
    title,
    description,
    link,
}) => (
  <Card sx={{
    maxWidth: 300,
    mb: '1vh',
    textAlign: 'center',
    bgcolor: '#202020',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'MyFont',
}}>
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
      <Typography variant="body2" color="text.secondary" sx={{ color: 'grey', fontFamily: 'MyFont' }}>
        {description}
      </Typography>
    </CardContent>
    <CardActions sx={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Link
        href={link}
        sx={{
          textDecoration: 'none',
          color: '#DEDEDE',
          fontSize: '15px',
        }}
      >
        View Github Code
      </Link>
    </CardActions>
  </Card>
  );

export default AppMediaCard;
