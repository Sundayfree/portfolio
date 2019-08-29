import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  card: {
    marginBottom: 20,
    width: '380px',
    height: '200px',
    minWidth: 300,
    maxWidth: 400,
    minHeight: 150,
    maxHeight: 220
  },

  title: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Varela Round'
  },
  pos: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Varela Round',
    marginBottom: 5
  }
});
export default function CardItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Name: {props.title}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Description: {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Url: {props.url}</Button> */}
        <a href={props.url} style={{ textDecoration: 'none', color: '#000' }}>
          Url: {props.url}
        </a>
      </CardActions>
    </Card>
  );
}
