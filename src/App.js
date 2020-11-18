import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var [isEditing, setIsEdit] = useState("");
  var [orders, setOrders] = useState([]);
  var [order, setOrder] = useState({});


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
  var [product, setProduct] = useState("");
  var [price, setPrice] = useState(-1);

  useEffect(() => {

    getAllOrders();
  }, []);

  const getAllOrders = async () => {
    let ordersData = await fetch("http://localhost:3000/orders/");
    let ord = await ordersData.json();
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
        street: "1700 Pennsylvania Ave",
        city: "Washington",
        state: "DC",
        zip: 17760
      },
      product,
      price,
    })
  })

  let newOrder = await newOrderData.json();

  getAllOrders();
}

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <label>Product</label>
          <input type="text" onChange = { e => setProduct(e.target.value)} />
          <label>Price</label>
          <input type="text" onChange = { e => setPrice(e.target.value)} />
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
