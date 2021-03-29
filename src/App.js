import React, { useState } from 'react';
import './App.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import PersonIcon from '@material-ui/icons/Person';
import GradeIcon from '@material-ui/icons/Grade';
import TopNav from './component/topNav';
import { BrowserRouter as Router, Route } from 'react-router-dom';


/** PAGE */
import History from './page/History';
import User from './page/User';
import Confirmation from './page/Confirmation';


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
      name: "Samsung Monitor",
      img: "",
      storeName: "Miscrosoft Store",
      storeAddress: "Microsoft Store Rive-Sud",
      orderNum: "8904535",
      quantity: "1",
      pickUpTime: "2:00 PM, Feb 24, 2021",
      status: "Ready",
      travalingTime: "23",
      trafficStatus: "Fluent"
    },
    {
      name: "Samsung Monitor",
      img: "",
      storeName: "Miscrosoft Store",
      storeAddress: "Microsoft Store Rive-Sud",
      orderNum: "8904535",
      quantity: "1",
      pickUpTime: "2:00 PM, Feb 24, 2021",
      status: "Ready",
      travalingTime: "23",
      trafficStatus: "Fluent"
    },
  ])

  // History here
  const [hisItem] = useState([
    {
      name: "Samsung Monitor",
      img: "",
      storeName: "Miscrosoft Store",
      storeAddress: "Microsoft Store Rive-Sud",
      orderNum: "8904535",
      quantity: "1",
      pickUpTime: "2:00 PM, Feb 24, 2021",
      status: "Ready",
      travalingTime: "23",
      trafficStatus: "Fluent"
    },
    {
      name: "Samsung Monitor",
      img: "",
      storeName: "Miscrosoft Store",
      storeAddress: "Microsoft Store Rive-Sud",
      orderNum: "8904535",
      quantity: "1",
      pickUpTime: "2:00 PM, Feb 24, 2021",
      status: "Ready",
      travalingTime: "23",
      trafficStatus: "Fluent"
    },
  ])



  // MAIN

  return (
    <Router>
      <div className="App">
        <TopNav styl={style_TopNav}></TopNav>
        <Route path='/' exact />
        <Route path='/history' component={History} />
        <Route path='/user' component={User} />
        <Route path='/confirmation' component={Confirmation} />
        <div style={{ marginBottom: "100px" }} />
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
