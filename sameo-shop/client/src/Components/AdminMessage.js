import React from 'react';
import {useState, useEffect} from 'react';
import Services from '../services';

function AdminMessage(){
    const [message, setMessage] = useState('');
    const [customersList, setCustomersList] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState('');

    useEffect(() => {
        Services.getCustomers()
        .then((res) => setCustomersList(res.data));
    }, []);

    function handleSend(){
        Services.newAdminMessage(message, selectedCustomer, true);
    };

    return(
    <div>
        <form onSubmit={() => handleSend()}>
            <select name="customersList"  onChange={(e) => setSelectedCustomer(e.target.value)}>
                <option>Choisissez un client</option>
                {customersList.map(({name, firstname}) => (
                    <option value={name} key={name}>{name} {firstname}</option>
                ))}
            </select>
            <textarea placeholder="Message" onChange={(e) => setMessage(e.target.value)}/>
            <button type="submit">Envoyer</button>
        </form>
    </div>
    );
};

export default AdminMessage;