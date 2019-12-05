import React from 'react';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom'
import Naughty from './components/Naughty/Naughty'
import Nice from './components/Nice/Nice'
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
  <Switch>
  <Route path='/' exact component={LandingPage}/>
  <Route path='/naughty' component={Naughty}/>
  <Route path='/nice' component={Nice}/>
  </Switch>

    </div>
  );
}

export default App;
