import React from 'react';
import {useState, useEffect} from 'react';
import Services from '../services';
import {Link} from 'react-router-dom';
import arrow from '../Images/arrow.png';
import '../CSS/AdminMessage.css';

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
    <div className="adminMessage">
        <Link className="customerMessage_retours" to="/Admin"><img src={arrow} alt="Retour" className="customerMessage_retour"/><h4 className="customerMessage_retour_txt">Retour admin</h4></Link>
        <form onSubmit={() => handleSend()}>
            <select className="adminMessage_customersList" name="customersList"  onChange={(e) => setSelectedCustomer(e.target.value)}>
                <option>Choisissez un client</option>
                {customersList.map(({name, firstname}) => (
                    <option value={name} key={name}>{name} {firstname}</option>
                ))}
            </select>
            <textarea placeholder="Message" className="adminMessage_message" onChange={(e) => setMessage(e.target.value)}/>
            <button type="submit" className="adminMessage_button">Envoyer</button>
        </form>
    </div>
    );
};

export default AdminMessage;