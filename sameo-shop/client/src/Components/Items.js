import '../CSS/Items.css';
import React from 'react';
// import alcohol_free from '../Images/alcoholFree.png';

function Items({ id, cover, name, price, index, addToCart, alcoholFree }){

    function handleClick(e, name, price){
        e.preventDefault();
        addToCart(name, price)
    };

    return (
        <li key={`${id}`} className='items' /*onClick={() => handleClick(name)}*/>
            <img className='item-cover' src={cover} alt={`${name} cover`} onClick={(e) => handleClick(e, name, price)}/>
            <h1 className="Item_Name">{name}{/*{alcoholFree? (<img src={alcohol_free} className="alcoholFree" alt="sans alcool"/>):null}*/}</h1>
            <p className="Item_Price">{price}€</p>
        </li>
    );
}

// function handleClick(itemName){
//     alert(`Vous voulez acheter 1 ${itemName} ?👌`)
// }

export default Items;