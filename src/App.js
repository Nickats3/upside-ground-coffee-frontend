
import React from "react";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";


import React, {useState, useEffect} from 'react';


import './App.css';
import login from './login.js';
import home from './home.js';
import signup from './signup.js';
import onepoundbag from './onepoundbag.js';
function App() {

  var [isEditing, setIsEdit] = useState("");
  var [orders, setOrders] = useState([]);
  var [order, setOrder] = useState({});

//EXAMPLE SCHEMA FROM DATABASE
//   {"_id":{"$oid":"5fa7574ead5ecf319043b04b"},
//   "customer":{
//     "firstname":"Kevin",
//     "lastname":"Steele",
//     "email":"kevins.steele@gmail.com"
//   },
//   "address":{
//     "street":"1700 Pennsylvania Ave",
//     "city":"Washington",
//     "state":"DC",
//     "zip":{"$numberInt":"17760"}
//   },
//   "product":"Guns",
//   "price":{"$numberInt":"1000"},
//   "__v":{"$numberInt":"0"}
// }

  var [customer, setCustomer] = useState({});
  var [address, setAddress] = useState({});

  var [street, setStreet] = useState("");
  var [city, setCity] = useState("");
  var [state, setState] = useState("");
  var [zip, setZip] = useState("");

  var [product, setProduct] = useState("");
  var [price, setPrice] = useState(-1);

  useEffect(() => {

    getAllOrders();
  }, []);

  const getAllOrders = async () => {
    let ordersData = await fetch("http://localhost:3000/orders/");
    let ord = await ordersData.json(); //ord BECAUSE order AND orders ARE USED ABOVE ON LINES 8 AND 9
    setOrders(ord.data.orders)
  } 

const handleSubmit = async (e) => {
  e.preventDefault();
  let newOrderData = await fetch("http://localhost:3000/orders/add", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      customer:{
        firstname: "Kevin",
        lastname: "Steele",
        email: "kevins.steele@gmail.com"
      },
      address:{
        street: street,
        city: city,
        state: state,
        zip: zip
      },
      product,
      price,
    })
  })

  //why is this undefined if using address? Lines 76-80 are in place for testing the user inputs
  console.log(address);
  console.log(address.street);
  console.log(address.city);
  console.log(state);
  console.log(zip);

  let newOrder = await newOrderData.json();

  getAllOrders();
}

// const newAddress = Object.assign({}, address);
// const newCity = Object.assign({}, address.city)

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

    <div className="App">
        <form onSubmit={handleSubmit}>
          <label>Product</label>
          <input type="text" onChange = { e => setProduct(e.target.value)} /> 
          <label>Price</label>
          <input type="text" onChange = { e => setPrice(e.target.value)} />

          <br></br>
          <label>Street</label>
          <input type="text" value = {street} onChange = { e => setStreet(e.target.value)} />
          <label>City</label>
          <input type="text" value = {city} onChange = { e => setCity(e.target.value)} />
          <label>State</label>
          <input type="text" value = {state} onChange = { e => setState(e.target.value)} />
          <label>Zip</label>
          <input type="text" value = {zip} onChange = { e => setZip(e.target.value)} />
          <br></br>

          <input type="submit" />
        </form>
      {orders.map((order, idx) => {
        return(
          <div key={idx}>
            {order.customer.firstname} {order.customer.lastname} - {order.product} - {order.price} 
          </div>
        )
      })}

    </div>
  );
}






export default App;
