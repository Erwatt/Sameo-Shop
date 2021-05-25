import {ItemList} from '../Data/ItemList';
import Items from './Items';
import '../CSS/ShoppingList.css';

function ShoppingList(){
    const categories = ItemList.reduce(
        (acc, item) =>
            acc.includes(item.category) ? acc : acc.concat(item.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className="items-list">
                {ItemList.map(({ id, cover, name, price}) =>(
                    <Items
                        id={id}
                        cover={cover}
                        name={name}
                        price={price}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;