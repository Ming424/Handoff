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
function createStoreData(storeName, img, storeAddress, pickUpTime, orderNum, orderStatus, travelingTime, trafficStatus) {
    return { storeName, img, storeAddress, pickUpTime, orderNum,orderStatus, travelingTime, trafficStatus};
  }

function createItemOrder( itemName, itemId, img, quantity, price){
      return { itemName, itemId, img, quantity, price};
  }
  
  const store = createStoreData("Microsoft Store", "img", "Microsoft Store Rive-Sud", "1:00 PM, Feb 24, 2021", "8904535", "Ready", "23", "Fluid", "3000");

  const itemMap = [
    createItemOrder("Samsung Monitor", "123456","img", 1, 300), 
    createItemOrder("Mouse", "34567","img", 1, 50),
    createItemOrder("Keyboard", "95843903", "img", 1, 100)
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
        title= {store.storeName}
        subheader={store.totalAmount}
      />
      <CardMedia
        className={classes.media}
        image="./asset/logo.png"
        title="Store Logo"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Order Number: {store.orderNum} <br/>
            Order Status : {store.orderStatus} <br/>
            Pickup Time: {store.pickUpTime} <br/>
            Address: {store.storeAddress} <br/>
            Traveling Time: {store.travelingTime} <br/>
            Traffic Conditions: {store.trafficStatus}
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
        {itemMap.map((item) => (
            <Card variant="outlined">
            <CardHeader
            avatar={
            <Avatar aria-label="smt" className={classes.avatar}>
            {item.itemName}
            </Avatar>
            }
            title= {item.itemName}
            subheader = {item.itemId}
            />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Quantity: {item.quantity} <br/>
            Price : {item.price} <br/>
        </Typography>
            </CardContent>
            </Card>
))}
        </CardContent>
      </Collapse>
    </Card>
  );
}