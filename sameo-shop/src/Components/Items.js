import '../CSS/Items.css';

function Items({ id, cover, name, price }){
    return (
        <li key={id} className='items' onClick={() => handleClick(name)}>
            <img className='item-cover' src={cover} alt={`${name} cover`}/>
            <h1>{name}</h1>
            <p>Prix: {price}€</p>
        </li>
    );
}

function handleClick(itemName){
    alert(`Vous voulez acheter 1 ${itemName} ?👌`)
}

export default Items;