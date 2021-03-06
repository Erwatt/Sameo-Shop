import '../CSS/Cart.css';
import {useState, useEffect} from 'react';
import React from 'react';
import services from '../services.js';





function Cart({ cart, updateCart }){
        const [isOpen, setIsOpen] = useState(true);
        const [customersList, setCustomersList] = useState([]);
        const [selectedCustomer, setSelectedCustomer] = useState('');
        const total = cart.reduce(
            (acc, itemType) => acc + itemType.amount * itemType.price,
            0
            );

    function handlePost(e){
        services.takeOrder(cart, selectedCustomer)
            .then((res) => {
                res.json({message: 'Commande enregistrée'});
            });
        
    };

    useEffect(() => {
        services.getCustomers()
        .then((res) => setCustomersList(res.data));
    });
    


    return isOpen ? (
        <div className="cart-open">
            <button className="cart-button" onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                    {name} {price}€ x {amount}
                </div>
            ))}

            <h3>Total : {total}€</h3>
            <form onSubmit={(e) => handlePost(e)}>
                <select name="customersList"  onChange={(e) => setSelectedCustomer(e.target.value)}>
                    <option selected>Choisissez votre nom</option>
                {customersList.map(({name, firstname}) => (
                    <option value={name} key={name}>{name} {firstname}</option>
                ))}
            </select>
            <button>Commander</button>
            </form>
            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className="cart-closed">
            <button className="cart-button" onClick={() => setIsOpen(true)}>Ouvrir</button>
        </div>
    );
}

export default Cart;