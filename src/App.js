import React, { useState } from 'react';
import './App.css';

import TopNav from './component/topNav';
import BottomNav from './component/bottomNav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


/** PAGE */
import Dashboard from './page/Dashboard';
import History from './page/History';
import User from './page/User';


 
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

  return (
    <Router>
      <div className="App">
        <TopNav />

        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/history' component={History} />
          <Route path='/user' component={User} />
        </Switch>

        <BottomNav  />

      </div>
    </Router>
  );
}

export default App;
