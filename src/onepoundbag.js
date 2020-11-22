import React from "react";
import {Link} from "react-router-dom";

import bag1 from './upside ground coffee bag.png';
import './onepoundbag.css';

function onepoundbag() {

    return (
<div class="user">
<header class="user__header">
    
    <h1 class="user__title">One Pound Bag</h1>
</header>

<p class = 'bag' >

    
</p>
<p>
<br class='description'>
    </br>

    This Special bag is a one pound bag of 
    our special home roast that is roasted in house. 
    It is a medium roast, perfect for breakfast foods 
    and milky desserts.
  
</p>

<Link to ='shopping cart'><button>
              Add to cart
            </button>
            </Link>
</div>


    )
};

export default onepoundbag;