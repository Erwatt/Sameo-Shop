import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import services from '../services';
import arrow from '../Images/arrow.png';
import '../CSS/CustomerMessage.css';

function CustomerMessage(){

    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [message, setMessage] = useState('');

    function handleMessage(){
        services.sendMessage(selectedCustomer, message)
            .then((res) => res.json({message: "Message envoyé"}));
    };

    useEffect(() => {
        services.getAssignedClient("room")
        .then((res) => setSelectedCustomer(res.data.client));
        // console.log(assignedClient)
    });

    return (
        <div className="customerMessage">
            <Link className="customerMessage_retours" to="/Salle1"><img src={arrow} alt="Retour" className="customerMessage_retour"/><h4 className="customerMessage_retour_txt">Retour accueil</h4></Link>
            <form onSubmit={() => handleMessage()}>
                <label>Message</label>
                <textarea className="customerMessage_text" onChange={(e) => setMessage(e.target.value)} placeholder="Message"/>
                <button className="customerMessage_send">Envoyer</button>
            </form>
        </div>
    );
};

export default CustomerMessage;