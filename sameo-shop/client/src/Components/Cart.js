import '../CSS/Cart.scss';
import {useState, useEffect} from 'react';
import React from 'react';
import services from '../services.js';
import notif from '../Audio/notif.wav';





function Cart({ cart, updateCart }){
    const [isOpen, setIsOpen] = useState(true);
    // const [customersList, setCustomersList] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const notifAudio = new Audio(notif);
    const playSound = audioFile => {
        audioFile.play();
        alert(`"Le boeuf c'est du porc ?" : Morgane le 01/06/2021 à 11h27`)
    };
    const total = cart.reduce(
        (acc, itemType) => acc + itemType.amount * itemType.price,
        0
        );

    window.addEventListener("scroll", handleScroll);

    const [sticky, setSticky] = useState(false);

    function handleScroll(){
        const offsetCart = window.scrollY;
        if (offsetCart > 260){
            setSticky(true);;
        } else {
            setSticky(false);
        };
    }

    let cartClasses = ['test2'];
    if (sticky){
        cartClasses.push(' test');
    };

    useEffect(() => (
        handleScroll()
    ));

    function handlePost(e){
        services.takeOrder(cart, selectedCustomer)
            .then((res) => {
                res.json({message: 'Commande enregistrée'});
            });

        services.announceOrder(cart, selectedCustomer);
        services.sendMessage(selectedCustomer, "Nouvelle commande de " + selectedCustomer);
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
            <div className={cartClasses}>
            <button className="cart-button" onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
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
            <button className="cart_order">Commander</button>
            </form>
            <button className="cart_empty" onClick={() => updateCart([])}>Vider le panier</button>
            { total === 2021 ? (
                <button className="cart_prout" onClick={() => playSound(notifAudio)}>Prout</button>
            ):null}
            </div>
            
        </div>
    ) : (
        <div className="cart-closed">
            <button className="cart-button" onClick={() => setIsOpen(true)}>Ouvrir</button>
        </div>
    );
};

export default Cart;