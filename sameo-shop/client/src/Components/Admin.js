import Services from '../services';
import React, {useState, useEffect} from 'react';



function Admin(){
    const [ordersList, setOrdersList] = useState(null);
    const [customersList, setCustomersList] = useState([]);
    const [customerName, setCustomerName] = useState('');
    const [customerFirstname, setCustomerFirstname] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState('');

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

    useEffect(() => {
        Services.getCustomers()
        .then((res) => setCustomersList(res.data));
    });

    function handleDelete(){
        // console.log(selectedCustomer)
        const custom = selectedCustomer.toString();
        Services.deleteOrder(custom);
    };

    function handleNewCustomer(e){
        Services.newCustomer(customerName, customerFirstname);
    }

    return (
        <div>
            <select name="customersList"  onChange={(e) => setSelectedCustomer(e.target.value)}>
                <option selected>Choisissez un client</option>
                {customersList.map(({name, firstname}) => (
                    <option value={name} key={name}>{name} {firstname}</option>
                ))}
            </select>
            {ordersList !== null ?(
                <div>
                    <form onSubmit={(e) => handleDelete(e)}>
                        <button>Supprimer la commande</button>
                    </form>
                    <ul className="ordersList">
                        {ordersList.map(({id, name, price, amount,customer}, index) => (
                            customer === selectedCustomer ?(
                            <li key={index}>
                                <h2>{name}</h2>
                                <p>Prix: {price}€</p>
                                <p>Quantité: {amount}</p>
                            </li>
                            ) : null
                        ))}
                    </ul>
                </div>
            ): null}
            <div className="CreateCustomer">
                <form onSubmit={(e) => handleNewCustomer(e)}>
                    <label>Nom du client</label>
                    <input onChange={(e) => setCustomerName(e.target.value)} placeholder="Nom"/>
                    <label>Prénom du client</label>
                    <input onChange={(e) => setCustomerFirstname(e.target.value)} placeholder="Prénom"/>
                    <button>Confirmer</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;