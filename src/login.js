import React from "react";
import {Link} from "react-router-dom";

import './App.css';
import './login.css';
import png from "./image0.png"


    function login() {

        return (
<div class="user">
    <header class="user__header">
        
        <h1 class="user__title">Please Sign In</h1>
    </header>
    
    <form class="form">

        <div class="form__group">
            <input type="email" placeholder="Email" class="form__input" />
        </div>
        
        <div class="form__group">
            <input type="password" placeholder="Password" class="form__input" />
        </div>
        
        <Link to ='/'><button>
              Confirm
            </button>
            </Link>
    </form>
    <p>
          <Link to = '/'><img src= {png} alt ="logo" className ="logo"  /> </Link> 
        </p>   
</div>
                
        );

    }

  export default login;