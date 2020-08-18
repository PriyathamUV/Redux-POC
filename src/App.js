import React from 'react';
import SignIn from '../src/component/SignIn';
import './css/Signin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Details from '../src/component/Details';

import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
   <Router>
<Switch>
  <Route  exact path='/'>
    <SignIn/>
  </Route>
  <Route path='/details'>
    <Details/>
  </Route>
</Switch>

  </Router>  
      </header>
    </div>
  );
}

export default App;

