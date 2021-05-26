import '../CSS/App.css';
import ShoppingList from './SoppingList';
import {useState} from 'react';
import Cart from './Cart';

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <div className="App">
      <ShoppingList cart={cart} updateCart={updateCart}/>
      <Cart className="cart" cart={cart} updateCart={updateCart}/>
    </div>
  );
}

export default App;