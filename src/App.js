import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BottomNav from './component/bottomNav';
import StoreCard from './component/card';
import TopNav from './component/topNav';
import { Confirmation } from './page/Confirmation';
import Dashboard from './page/Dashboard';
import Detail from './page/Detail';
import History from './page/History';
import User from './page/User';

function App() {

  // STATE
  const [user] = useState({
    name: "Tim",
    userId: "8523",
    profileImg: "",
  })

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

  return (
    <Router>
      <div className="App">
        <TopNav />
        <StoreCard />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/history' component={History} />
          <Route path='/user' component={User} />
          <Route path='/detail' component={Detail} />
          <Route path='/confirmation' component={Confirmation} />
        </Switch>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
