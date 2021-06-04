import '../CSS/Items.css';
import React from 'react';

function Items({ id, cover, name, price, index }){
    return (
        <li key={`${index}-${id}`} className='items' /*onClick={() => handleClick(name)}*/>
            <img className='item-cover' src={cover} alt={`${name} cover`}/>
            <h1>{name}</h1>
            <p>Prix: {price}€</p>
        </li>
    );
}

// function handleClick(itemName){
//     alert(`Vous voulez acheter 1 ${itemName} ?👌`)
// }

export default Items;