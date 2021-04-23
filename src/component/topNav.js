import React, { useCallback, useEffect, useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link, useHistory } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Popover } from '@material-ui/core';
import { orders } from '../App';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../asset/logo.png';

// TOP NAVIGATION WITH LOGO, SEARCH, NOTIFICATION
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {

  }
}));

function NotificationList(props) {

  const history = useHistory();

  return (
    <Popover open={props.open} anchorEl={props.anchorEl} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} onClose={props.onClose} >
        <List>
          {props.notifications.length ? props.notifications.map(notification => (
            <ListItem key={notification.orderNumber} button onClick={() => {
              notification.isAcknowledged = true;
              props.onClick(notification.orderNumber);
              props.onClose();
              history.push("/detail", { orderNumber: notification.orderNumber });
            }}>
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              <ListItemText>
                <Typography>Your order from {notification.store.name} is ready!</Typography>
              </ListItemText>
            </ListItem>
          )) : <ListItem><ListItemText><Typography>There are no notifications.</Typography></ListItemText></ListItem>}
        </List>
    </Popover>
  )

}

const checkForReadyOrders = (orders) => {
  const readyOrders = orders.filter(order => !order.isAcknowledged && order.readyAt <= Date.now());
  return readyOrders;
}

export default function TopNav() {

  const classes = useStyles();
  const [notifications, setNotifications] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = useCallback((orderNumber) => {
    setNotifications(notifications.filter(notification => notification.orderNumber !== orderNumber));
  }, [notifications]);

  useEffect(() => {
    setInterval(() => {
      setNotifications(checkForReadyOrders(orders.getState()));
    }, 30000);
  }, [notifications]);

  const open = Boolean(anchorEl);

  return (
    <div className={classes.grow} >
      <AppBar color='#FFD700' elevation={0} style={{ background: '#FFD700', alignItems: 'center' }} >
        <Toolbar>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit', display: 'flex', alignItems: 'center' }}>
            <img src={logo} style={{ height: '50px' }} alt="LOGO" />
            <Typography className={classes.title} variant="h6" noWrap> Handoff </Typography>
          </Link>

          <div style={{ width: '' }} className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <IconButton color="inherit" onClick={(event) => {
            event.preventDefault();
            if (!anchorEl) {
              setAnchorEl(event.currentTarget);
            }
          }}
          >
            <Badge badgeContent={notifications.length} color="secondary" invisible={!notifications.length}>
              <NotificationsIcon />
            </Badge>
            <NotificationList open={open} anchorEl={anchorEl} notifications={notifications} onClick={handleClick} onClose={() => setAnchorEl(null)} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ marginBottom: "100px" }} />
      <div style={{ marginBottom: "100px" }} />
    </div>
  );
}
