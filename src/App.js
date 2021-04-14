import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import './App.css';
import BottomNav from './component/bottomNav';
import TopNav from './component/topNav';
import Checkout from './page/Checkout';
import { Confirmation } from './page/Confirmation';
import Dashboard from './page/Dashboard';
import Detail from './page/Detail';
import History from './page/History';
import StorePage from './page/StoreDetail';
import User from './page/User';


function reducer(state = [], action) {
  return action.type === "order/add-order" ? [...state, action.payload] : state;
}

export const orders = createStore(reducer);

function App() {

  return (
    <Router>
      <div className="App">
        <TopNav />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/history' component={History} />
          <Route path='/user' component={User} />
          <Route path='/detail' component={Detail} />
          <Route path='/confirmation' component={Confirmation} />
          <Route path='/store' component={StorePage} />
          <Route path='/checkout' component={Checkout} />
        </Switch>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
