import '../CSS/Cart.css';
import {useState} from 'react';
import React from 'react';
import services from '../services.js';





function Cart({ cart, updateCart }){
    const [isOpen, setIsOpen] = useState(true);
    const total = cart.reduce(
        (acc, itemType) => acc + itemType.amount * itemType.price,
        0
    );

    function handlePost(e){
        services.takeOrder(cart)
            .then((res) => {
                res.json({message: 'Commande enregistrée'});
            });
        
    };
    


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
                {console.log(cart)}
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