import {ItemList} from '../Data/ItemList';
import Items from './Items';
import '../CSS/ShoppingList.css';
import {useState} from 'react';


function ShoppingList({ cart, updateCart }){
    const [selectValue, setSelectValue] = useState('all');

    const categories = ItemList.reduce(
        (acc, item) =>
            acc.includes(item.category) ? acc : acc.concat(item.category),
        []
    )

    function addToCart(name, price){
        const currentItemAdded = cart.find((item) => item.name === name)
        if (currentItemAdded){
            const cartFilteredCurrentItem = cart.filter(
                (item) => item.name !== name
            )
            updateCart([
                ...cartFilteredCurrentItem,
                { name, price, amount: currentItemAdded.amount + 1}
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div>
            <select name="categories" id="category_select" onChange={(e) => setSelectValue(e.target.value)}>
                <option value='all' key='all'>Tous les produits</option>
                {categories.map((cat) => (
                    <option value={cat} key={cat}>{cat}</option>
                ))}
            </select>
            {console.log(selectValue)}
            <ul className="items-list">
                {ItemList.map(({ id, cover, name, price, category}) =>(
                    ((category === selectValue) || (selectValue === 'all'))?
                        <div>
                        <Items
                            id={id}
                            cover={cover}
                            name={name}
                            price={price}
                        />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                    
                    
                :null))}
            </ul>
        </div>
    );
}

export default ShoppingList;