import {ItemList} from '../Data/ItemList';
import Items from './Items';
import '../CSS/ShoppingList.scss';
import React from 'react';
import arrow from '../Images/arrow.png';
import {Link} from 'react-router-dom';


function ShoppingList({ cart, updateCart, setSelectValue, selectValue }){
    
  

    const categories = ItemList.reduce(
        (acc, item) =>
            acc.includes(item.category) ? acc : acc.concat(item.category),
        []
    )

    function handleClick(e,value){
        e.preventDefault();
        setSelectValue(value);
    }

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

    if (selectValue === 'all'){
        return (
            <div>
                <Link className="shoppingList_retours" to="/Salle1"><img src={arrow} alt="Retour" className="shoppingList_retour"/><h3 className="shoppingList_retour_txt">Retour Accueil</h3></Link>
                <div className="shoppingList_cat">
                    {categories.map((cat, index) => (
                        <button className="shoppingList_cat_button" value={cat} key={cat} onClick={(e) => handleClick(e, e.target.value)}>{cat}</button>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="shoppingList_retours" onClick={(e) => setSelectValue('all')}><img src={arrow} alt="Retour" className="shoppingList_retour"/><h3 className="shoppingList_retour_txt">Retour Catégories</h3></div>
                <ul className="items-list">
                    {ItemList.map(({ id, cover, name, price, category, alcoholFree}, index) =>(
                        ((category === selectValue) || (selectValue === 'all'))?
                            <Items
                             id={id}
                             cover={cover}
                             name={name}
                             price={price}
                             index={index}
                             addToCart={addToCart}
                             key={id}
                             alcoholFree={alcoholFree}
                            />                    
                 :null))}
             </ul>
            </div>
        );
    };

    // return (
        // <div>
        //     <div className="shoppingList_retour_select">
        //     <Link className="shoppingList_retours" to="/Salle1"><img src={arrow} alt="Retour" className="shoppingList_retour"/><h3 className="shoppingList_retour_txt">Retour Accueil</h3></Link>
        //     <select key="select" name="categories" id="category_select" onChange={(e) => setSelectValue(e.target.value)}>
        //         <option value='all' key='all'>Tous les produits</option>
        //         {categories.map((cat, index) => (
        //             <option value={cat} key={cat}>{cat}</option>
        //         ))}
        //     </select>
        //     </div>
        //     {/* {console.log(selectValue)} */}
        //     <ul className="items-list">
        //         {ItemList.map(({ id, cover, name, price, category, alcoholFree}, index) =>(
        //             ((category === selectValue) || (selectValue === 'all'))?
        //                 <Items
        //                     id={id}
        //                     cover={cover}
        //                     name={name}
        //                     price={price}
        //                     index={index}
        //                     addToCart={addToCart}
        //                     key={id}
        //                     alcoholFree={alcoholFree}
        //                 />                    
        //         :null))}
        //     </ul>
        // </div>
    // );
}

export default ShoppingList;