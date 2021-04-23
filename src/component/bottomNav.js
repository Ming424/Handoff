import React, { useState }  from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import StoreIcon from '@material-ui/icons/Store';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from "react-router-dom";

// BOTTON NAVIGATION COMPONENT
export default function SimpleBottomNavigation(props) {
  const pathname = window.location.pathname;
  const [value, setValue] = useState(pathname);

  return (
    <>
    <div style={{marginBottom:"100px"}} />
      <BottomNavigation 
        showLabels 
        style={style_BottomNav} 
        value={value} 
        onChange={(event, newValue) => { setValue(newValue); }} 
        >
        <BottomNavigationAction label="Stores" value="/" icon={<StoreIcon />} component={Link} to='/' />
        <BottomNavigationAction label="Dashboard" value="/history" icon={<DashboardIcon />} component={Link} to='/history' />
        <BottomNavigationAction label="Me" value="/user" icon={<PersonIcon />} component={Link} to='/user' />
      </BottomNavigation>
    </>
  );
}

const style_BottomNav = {
  position: 'fixed',
  bottom: 0,
  width: "100%",
  backgroundColor: "#FFD700",
  height: 'auto',
};
