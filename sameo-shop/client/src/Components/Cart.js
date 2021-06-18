import '../CSS/Cart.scss';
import {useState, useEffect} from 'react';
import React from 'react';
import services from '../services.js';





function Cart({ cart, updateCart, assignedClient }){
        const [isOpen, setIsOpen] = useState(true);
        // const [customersList, setCustomersList] = useState([]);
        const [selectedCustomer, setSelectedCustomer] = useState('');
        const [object, setObject] = useState('');
        const [message, setMessage] = useState('');
        const total = cart.reduce(
            (acc, itemType) => acc + itemType.amount * itemType.price,
            0
            );

    function handlePost(e){
        services.takeOrder(cart, selectedCustomer)
            .then((res) => {
                res.json({message: 'Commande enregistrée'});
            });

        services.announceOrder(cart, selectedCustomer);
        
    };

    function handleMessage(){
        services.sendMessage(selectedCustomer, object, message)
            .then((res) => res.json({message: "Message envoyé"}));
    };

    useEffect(() => {
        services.getAssignedClient("room")
        .then((res) => setSelectedCustomer(res.data.client));
        // console.log(assignedClient)
    });

    // useEffect(() => {
    //     services.getCustomers()
    //     .then((res) => setCustomersList(res.data));
    // });
    


    return isOpen ? (
        <div className="cart-open">
            <button className="cart-button" onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            <h1>{assignedClient}</h1>
            {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                    {name} {price}€ x {amount}
                </div>
            ))}

            <h3>Total : {total}€</h3>
            <form onSubmit={(e) => handlePost(e)}>
                {/* <select name="customersList"  onChange={(e) => setSelectedCustomer(e.target.value)}>
                    <option selected>Choisissez votre nom</option>
                {customersList.map(({name, firstname}) => (
                    <option value={name} key={name}>{name} {firstname}</option>
                ))}
            </select> */}
                <h2>Client actuel : {selectedCustomer}</h2>
            <button className="cart_order">Commander</button>
            </form>
            <button className="cart_empty" onClick={() => updateCart([])}>Vider le panier</button>
            <h2>Envoyer un message</h2>
            <form onSubmit={() => handleMessage()}>
                <label>Objet</label>
                <input onChange={(e) => setObject(e.target.value)} placeholder="Objet"/>
                <label>Message</label>
                <textarea onChange={(e) => setMessage(e.target.value)} placeholder="Message"/>
                <button>Envoyer</button>
            </form>
        </div>
    ) : (
        <div className="cart-closed">
            <button className="cart-button" onClick={() => setIsOpen(true)}>Ouvrir</button>
        </div>
    );
};

export default Cart;