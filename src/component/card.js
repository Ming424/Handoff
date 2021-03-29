import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

// Generate Order Data
function createStoreData(storeName, img, storeAddress, pickUpTime, orderNum,orderStatus, travelingTime, trafficStatus, totalAmount, items) {
    return { storeName, img, storeAddress, pickUpTime, orderNum,orderStatus, travelingTime, trafficStatus, totalAmount, items};
  }

function createItemOrder( itemName, img, quantity, price){
      return { itemName, img, quantity, price};
  }
  
  const itemMap = [
    createStoreData("Microsoft", "img", "address", "pickUpTime", 12345 , "orderStatus", "travelingTime", "trafficStatus", 100, [createItemOrder("","", 1, 100), createItemOrder("","", 1, 100)]),
  ];

export default function StoreCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="smt" className={classes.avatar}>
            S
          </Avatar>
        }
        title= {itemMap.storeName}
        subheader="Total Order Price"
      />
      <CardMedia
        className={classes.media}
        image="./asset/logo.png"
        title="Store Logo"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Order Info
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="clear">
          <CheckCircleRoundedIcon />
        </IconButton>
        <IconButton aria-label="location">
          <LocationOnRoundedIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Card>
          <CardHeader
             avatar={
            <Avatar aria-label="smt" className={classes.avatar}></Avatar>}
             title="Item Name"
            subheader="Item Price"/>
          </Card>
        </CardContent>
      </Collapse>
    </Card>
  );
}