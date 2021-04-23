import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import profPic from '../asset/profile.jpg'
import { Container } from '@material-ui/core';

// USER PAGE
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'block',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    posSmall: {
        marginBottom: 5,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    picture: {
        borderRadius: '50%',
    }
  }));

  export default function User() {
    const classes = useStyles();
  
    return (
      <Container maxWidth="lg">
        <Card className={classes.root}>
          <CardContent>
              <img src={profPic} className={classes.picture} style={{height:'100px'}} alt="User Profile" />
            <Typography variant="h5" component="h2">
              Rick Astley
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              ID: 4324789523
            </Typography>
            <Typography variant="body2" component="p">
              This user is too lazy to leave a word
            </Typography>
          </CardContent> 
          <Button className={classes.posSmall} size="small" variant="contained" color="primary" fullWidth>Q&amp;A</Button>
          <Button size="small" variant="contained" color="secondary" fullWidth>Log Out</Button>
        </Card>
      </Container>
    );
  }