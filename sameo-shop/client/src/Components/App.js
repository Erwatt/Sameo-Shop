import '../CSS/App.css';
// import ShoppingList from './SoppingList';
import {useState} from 'react';
// import Cart from './Cart';
import Header from './Header';
import React from 'react';
import Admin from './Admin';
import Login from './Login';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import { Route, Switch} from 'react-router-dom';
import Room from './Room';
import CustomerHome from './CustomerHome';
import CustomerMessage from './CustomerMessage';
import AdminMessage from './AdminMessage';


function App() {

  React.useEffect(() => {
    document.title = 'Saméo-Shop 😎';
  })
  
  const [cart, updateCart] = useState([]);
  const [selectValue, setSelectValue] = useState('all');
  // const [data, setData] = useState(null);
  const [assignedClient, setAssignedClient] = useState(null);
  

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // });

  

  return (
    <div className="App">
      {/* <p className="momo">{!data ? "Loading" : data}</p> */}
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <ProtectedRoute exact path="/Salle1" component={() => <CustomerHome room="room"/>} role={["Salle1", "Admin"]}/>
        <ProtectedRoute exact path="/Salle1/Shop" component={() => <Room room="room" cart={cart} updateCart={updateCart} selectValue={selectValue} setSelectValue={setSelectValue}/>} role={["Salle1", "Admin"]}/>
        <ProtectedRoute exact path="/Salle1/Message" component={CustomerMessage} role={["Salle1", "Admin"]}/>
        <ProtectedRoute exact path="/Admin" component={() => <Admin assignedClient={assignedClient} setAssignedClient={setAssignedClient}/>} role={["Admin"]}/>
        <ProtectedRoute exact path="/Admin/Message" component={AdminMessage} role={["Admin"]}/>
        <Route exact path="/SignIn" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;