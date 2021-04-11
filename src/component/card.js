import React, { useEffect } from 'react';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import item_placeholder from '../asset/item_placeholder.png'
import microsoft from '../asset/microsoft.png'
import { grey } from '@material-ui/core/colors';
import { orders } from '../App';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: 345,
    backgroundColor: grey[100],
  },
  media: {
    height: "10%",
    // paddingTop: '56.25%', // 16:9
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
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

// Generate Order Data
function createStoreData(storeName, img, storeAddress, pickUpTime, orderNum, orderStatus, travelingTime, trafficStatus) {
  return { storeName, img, storeAddress, pickUpTime, orderNum, orderStatus, travelingTime, trafficStatus };
}

function createItemOrder(itemName, itemId, img, quantity, price) {
  return { itemName, itemId, img, quantity, price };
}

const store = createStoreData("Microsoft Store", "", "Microsoft Store Rive-Sud", "1:00 PM, Feb 24, 2021", "8904535", "Ready", "23", "Fluid", "3000");

const itemMap = [
  createItemOrder("Samsung Monitor", "12345678", "", 1, 300),
  createItemOrder("Mouse", "34567378", "", 1, 50),
  createItemOrder("Keyboard", "95843903", "", 1, 100)
];

export default function StoreCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [temp, setTemp] = React.useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  orders.subscribe(() => setTemp(orders.getState()));

  return (
    <Container>
      {temp.map(order => (
        <Card className={classes.root} variant="elevation">
          <CardHeader
            title={order.storeName}
            subheader={order.totalAmount}
          />
          {
            expanded &&
            <CardMedia
              component="img"
              className={classes.media}
              image={microsoft} // TODO order.storeImage
              title="Store Logo"
            />
          }
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                Order Number: {order.orderNum} <br />
                Order Status : {order.orderStatus} <br />
                Pickup Time: {order.pickUpTime} <br />
                Address: {order.storeAddress} <br />
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
              {order.items.map((item) => (
                <Card variant="outlined">
                  <CardHeader
                    avatar={
                      // TODO item.image
                      <Avatar alt="item image" src={item_placeholder} className={classes.avatar} />
                    }
                    title={item.name}
                    subheader={item.id}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Quantity: {item.quantity} <br />
                      Price : {item.price} <br />
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Container>
  );
}