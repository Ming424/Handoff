import React, { useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import PersonIcon from '@material-ui/icons/Person';
import GradeIcon from '@material-ui/icons/Grade';
import TopNav from './component/topNav';
import logo from './asset/logo.png';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';


/** PAGE */
import History from './page/History';
import User from './page/User';
import ConfirmationPage from './page/Confirmation';

 
function App() {

  // STATE
  const [user] = useState({
    name: "Tim",
    userId: "8523",
    profileImg: "",
  })

  // PUT DUMMY ITEM HERE
  // name, img, storeName, storeAddress, orderNum, quantity, pickUpTime, status, travalingTime, trafficStatus
  const [item] = useState([
    {
      name:"Samsung Monitor", 
      img:"", 
      storeName:"Miscrosoft Store", 
      storeAddress:"Microsoft Store Rive-Sud", 
      orderNum:"8904535", 
      quantity:"1", 
      pickUpTime:"2:00 PM, Feb 24, 2021", 
      status:"Ready", 
      travalingTime:"23", 
      trafficStatus:"Fluent"
    },
    {
      name:"Samsung Monitor", 
      img:"", 
      storeName:"Miscrosoft Store", 
      storeAddress:"Microsoft Store Rive-Sud", 
      orderNum:"8904535", 
      quantity:"1", 
      pickUpTime:"2:00 PM, Feb 24, 2021", 
      status:"Ready", 
      travalingTime:"23", 
      trafficStatus:"Fluent"
    },
  ])

  // History here
  const [hisItem] = useState([
    {
      name:"Samsung Monitor", 
      img:"", 
      storeName:"Miscrosoft Store", 
      storeAddress:"Microsoft Store Rive-Sud", 
      orderNum:"8904535", 
      quantity:"1", 
      pickUpTime:"2:00 PM, Feb 24, 2021", 
      status:"Ready", 
      travalingTime:"23", 
      trafficStatus:"Fluent"
    },
    {
      name:"Samsung Monitor", 
      img:"", 
      storeName:"Miscrosoft Store", 
      storeAddress:"Microsoft Store Rive-Sud", 
      orderNum:"8904535", 
      quantity:"1", 
      pickUpTime:"2:00 PM, Feb 24, 2021", 
      status:"Ready", 
      travalingTime:"23", 
      trafficStatus:"Fluent"
    },
  ])



  // MAIN

  return (
    <Router>
      <div className="App">
        <TopNav styl={style_TopNav}></TopNav>
        
        <Button variant="contained" color="primary">
              Hello World
        </Button>
    
        <>
        <img src={logo} style={{height:'100px'}}/>
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
      </>

      <History hisItem={hisItem} />
      <User user={user} />


      <Route path='/' exact />
      <Route path='/history' component={History} />
      <Route path='/user' component={User} />
      <Route path='/confirmation' component={ConfirmationPage} />

      {/* BOTTO NAV */}
      <div style={{marginBottom:"100px"}} />
      <BottomNavigation showLabels style={style_BottomNav} >
        <BottomNavigationAction label="Dashboard" icon={<GradeIcon />} to='/' />
        <BottomNavigationAction label="History" icon={<RestoreIcon />} to='/history' />
        <BottomNavigationAction label="Me" icon={<PersonIcon />} to='/user' />
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
