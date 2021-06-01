import '../CSS/App.css';
import ShoppingList from './SoppingList';
import {useState} from 'react';
import Cart from './Cart';
import Header from './Header';
import React from 'react';

function App() {
  const [cart, updateCart] = useState([]);
  const [data, setData] = useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });

  return (
    <div className="App">
      <p>{!data ? "Loading" : data}</p>
      <Header/>
      <div className="shop">
        <ShoppingList cart={cart} updateCart={updateCart}/>
        <Cart className="cart" cart={cart} updateCart={updateCart}/>
      </div>
    </div>
  );
}

export default App;