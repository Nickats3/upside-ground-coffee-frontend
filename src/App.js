import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";

import logo from './logo.svg';
import png from './upside ground coffee bag.png';
import './App.css';
import login from './login.js';
import home from './home.js';
import signup from './signup.js';
import onepoundbag from './onepoundbag.js';
function App() {
  return (
    <div>

         <BrowserRouter>
       <Switch>
      <Route exact path="/login" component={login} />
      <Route exact path="/" component={ home } />
      <Route exact path="/signup" component={ signup } />
      <Route exact path="/onepoundbag" component={ onepoundbag } />
      </Switch>
      </BrowserRouter>   
    </div>
  );
}






export default App;
