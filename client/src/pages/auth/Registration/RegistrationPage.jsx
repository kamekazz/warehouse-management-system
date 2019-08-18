import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { styleColor } from '../../../Styles/styleThem';
import { RemoveLickLine } from '../../../Elements/ButtonEls';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    maxHeight: 350
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <MainPageEl>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?cs=srgb&dl=adults-collaborate-collaboration-1036641.jpg&fm=jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              what is the next step ?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Must contact supervisor or admin and informed your application has
              been Completed so they can process and put you in this system,For
              more information please contact ez-wms .
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <RemoveLickLine to="/">
            <Button variant="contained" color="primary">
              Go To Home Page
            </Button>
          </RemoveLickLine>
          <RemoveLickLine to="/">
            <Button size="small" color="secondary">
              Learn More
            </Button>
          </RemoveLickLine>
        </CardActions>
      </Card>
    </MainPageEl>
  );
}

const MainPageEl = styled.div`
  background: ${styleColor.color.listedBlue};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
