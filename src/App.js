import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import PersonIcon from '@material-ui/icons/Person';
import GradeIcon from '@material-ui/icons/Grade';
import TopNav from './component/topNav';
import logo3 from './logo.png';
import {BrowserRouter as Router, Route} from 'react-router-dom';

/** PAGE */
import User from './page/User';

 
function App() {


  // MAIN

  return (
    <Router>
      <div className="App">
        <TopNav styl={style_TopNav}></TopNav>
        

        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <img src={logo3} style={{height:'100px'}}/>
        <h1>TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTT</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1 >LASTTEST</h1>

        <Route path='/' exact render={(props) => (
          <>

          </>

        )} />

        <div style={{marginBottom:"100px"}} />
        <BottomNavigation showLabels style={style_BottomNav}>
          <BottomNavigationAction label="Dashboard" icon={<GradeIcon />} />
          <BottomNavigationAction label="History" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Me" icon={<PersonIcon />}  />
        </BottomNavigation>
      </div>
    </Router>
  );
}


// CSS

const style_TopNav = {
  width: '100%',
  position: 'fixed',
  top: 0,
  backgroundColor: "#FFD700",
  
}

const style_BottomNav = {
    position: 'fixed',
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFD700",
    height: 'auto',
};

export default App;
