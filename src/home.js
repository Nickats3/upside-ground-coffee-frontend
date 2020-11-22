import React from "react";
import {Link} from "react-router-dom";
import png from './image0.png';
import './App.css';
import bag1 from './upside ground coffee bag.png'

function home() {
    return (
<div className="home">
      <header className="home-header">
        <p>
          <img src= {png}  alt ="logo" className ="logo" />
        </p>
        <Link to= 'login'
         
          className="login"
          href= "login.js"
         
          
        >
          login
        </Link>
     
        <Link to= "signup"
    
          className="signup"
          href= "log in"
         
        >
         sign up
        </Link>
      </header>
      <p>
          <Link to = 'onepoundbag'><img src= {bag1} alt ="bag1" className ="bag1"  /> </Link> 
        </p>   

        
        </div>
 );
}

export default home;
