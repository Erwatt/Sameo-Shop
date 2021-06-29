import '../CSS/Items.css';
import React from 'react';

function Items({ id, cover, name, price, index, addToCart }){
    return (
        <li key={`${id}`} className='items' /*onClick={() => handleClick(name)}*/>
            <img className='item-cover' src={cover} alt={`${name} cover`} onClick={() => addToCart(name, price)}/>
            <h1 className="Item_Name">{name}</h1>
            <p className="Item_Price">Prix: {price}€</p>
        </li>
    );
}

// function handleClick(itemName){
//     alert(`Vous voulez acheter 1 ${itemName} ?👌`)
// }

export default Items;