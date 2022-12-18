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
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="120"
      image={image}
      sx={{
        objectFit: 'fill',
      }}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Link href={link}>
        View Github Code

      </Link>
    </CardActions>
  </Card>
  );

export default AppMediaCard;
