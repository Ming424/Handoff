import React, { useState }  from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import PersonIcon from '@material-ui/icons/Person';
import GradeIcon from '@material-ui/icons/Grade';
import { Link } from "react-router-dom";

export default function SimpleBottomNavigation(props) {

  const pathname = window.location.pathname;
  const [value, setValue] = useState(pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div style={{marginBottom:"100px"}} />
      <BottomNavigation showLabels style={style_BottomNav} value={value} onChange={() => handleChange()} >
        <BottomNavigationAction label="Dashboard" value="/" icon={<GradeIcon />} component={Link} to='/' />
        <BottomNavigationAction label="History" value="/history" icon={<RestoreIcon />} component={Link} to='/history' />
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
