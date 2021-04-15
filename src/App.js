import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import './App.css';
import BottomNav from './component/bottomNav';
import TopNav from './component/topNav';
import Checkout from './page/Checkout';
import { Confirmation } from './page/Confirmation';
import Stores from './page/Stores';
import Detail from './page/Detail';
import Dashboard from './page/Dashboard';
import StorePage from './page/StoreDetail';
import User from './page/User';
import Scheduling from './page/Scheduling';


function reducer(state = [], action) {
  return action.type === "order/add-order" ? [...state, action.payload] : state;
}

export const orders = createStore(reducer);

function App() {

  useEffect(() => {
    document.title = "Handoff";
  })

  return (
    <Router>
      <div className="App">
        <TopNav />
        <Switch>
          <Route path='/' exact component={Stores} />
          <Route path='/history' component={Dashboard} />
          <Route path='/user' component={User} />
          <Route path='/detail' component={Detail} />
          <Route path='/confirmation' component={Confirmation} />
          <Route path='/store' component={StorePage} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/scheduling' component={Scheduling} />
        </Switch>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
