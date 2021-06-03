import Services from '../services';
import {useState, useEffect} from 'react';



function Admin(){
    const[ordersList, setOrdersList] = useState(null);

    // function handleGet(){
    //     Services.seeOrder()
    //         .then((res) => res.json())
    //         .then((ordersList) => setOrdersList(ordersList.message));
    //         console.log(ordersList)

    // }

    useEffect(() => {
        Services.seeOrder()
        .then((res) => setOrdersList(res.data));
    });

    function handleDelete(){
        Services.deleteOrder()
    }

    return (
        <div>
            {/* <form onSubmit={(e) => handleGet(e)}>
                <button>Afficher les commandes</button>
            </form> */}
            {ordersList !== null ?(
                <div>
                    <form onSubmit={(e) => handleDelete(e)}>
                        <button>Supprimer la commande</button>
                    </form>
                    <ul className="ordersList">
                        {ordersList.map(({id, name, price, amount}, index) => (
                            <li key={index}>
                                <h2>{name}</h2>
                                <p>Prix: {price}€</p>
                                <p>Quantité: {amount}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ): null}
        </div>
    );
}

export default Admin;