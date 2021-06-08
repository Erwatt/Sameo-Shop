import '../CSS/App.css';
import ShoppingList from './SoppingList';
import {useState} from 'react';
import Cart from './Cart';
import Header from './Header';
import React from 'react';
import Admin from './Admin';
import { Route, Switch} from 'react-router-dom';


function App() {

  React.useEffect(() => {
    document.title = 'Saméo-Shop 😎';
  })

  const [cart, updateCart] = useState([]);
  const [data, setData] = useState(null);
  const [assignedClient, setAssignedClient] = useState(null);

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
            <Cart cart={cart} updateCart={updateCart} assignedClient={assignedClient} />
            <div className="list">
              <ShoppingList cart={cart} updateCart={updateCart}/>
            </div>
          </div>
        </Route>
        <Route exact path="/Admin" ><Admin assignedClient={assignedClient} setAssignedClient={setAssignedClient} /></Route>
      </Switch>
      
    </div>
  );
}

export default App;