import '../CSS/App.css';
import ShoppingList from './SoppingList';
import {useState} from 'react';
import Cart from './Cart';
import Header from './Header';
import React from 'react';
import Admin from './Admin';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

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
      <p className="momo">{!data ? "Loading" : data}</p>
      <Header/>
      <Switch>
        <Route exact path="/">
          <div className="shop">
            <ShoppingList cart={cart} updateCart={updateCart}/>
            <Cart className="cart" cart={cart} updateCart={updateCart}/>
          </div>
        </Route>
        <Route path="/Admin" component={Admin}/>
      </Switch>
      
    </div>
  );
}

export default App;