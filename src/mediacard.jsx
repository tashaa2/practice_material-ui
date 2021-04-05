import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CustomizedSnackbars from "./snackbar.jsx";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: '20px'
  },
  media: {
    height: 350,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.value}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CustomizedSnackbars />
      </CardActions>
    </Card>
  );
}