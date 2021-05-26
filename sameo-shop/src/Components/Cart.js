import '../CSS/Cart.css';
import {useState} from 'react';



function Cart({ cart, updateCart }){
    const [isOpen, setIsOpen] = useState(true);
    const total = cart.reduce(
        (acc, itemType) => acc + itemType.amount * itemType.price,
        0
    );
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
            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className="cart-closed">
            <button className="cart-button" onClick={() => setIsOpen(true)}>Ouvrir</button>
        </div>
    );
}

export default Cart;