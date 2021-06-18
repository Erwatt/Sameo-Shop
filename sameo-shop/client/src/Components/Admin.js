import Services from '../services';
import React, {useState, useEffect} from 'react';
import '../CSS/Admin.css';
// import {useHistory} from 'react-router-dom';



function Admin({assignedClient, setAssignedClient}){
    const [ordersList, setOrdersList] = useState(null);
    const [customersList, setCustomersList] = useState([]);
    const [customerName, setCustomerName] = useState('');
    const [customerFirstname, setCustomerFirstname] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState('');
    // const history = useHistory();
    const [selectedClientForRoom, setSelectedClientForRoom] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [messageList, setMessageList] = useState([]);

    // function handleGet(){
    //     Services.seeOrder()
    //         .then((res) => res.json())
    //         .then((ordersList) => setOrdersList(ordersList.message));
    //         console.log(ordersList)

    // }
    
    
    useEffect(() => {
        const interval = setInterval(() => {
            Services.seeOrder()
                .then((res) => setOrdersList(res.data));
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            Services.getMessages()
                .then((res) => setMessageList(res.data));
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        Services.getCustomers()
        .then((res) => setCustomersList(res.data));
    }, []);

    useEffect(() => {
        Services.getAssignedClient("room")
        .then((res) => setAssignedClient(res.data.client));
        // console.log(assignedClient)
    });

    function handleDelete(){
        // console.log(selectedCustomer)
        // history.push('/');
        const custom = selectedCustomer.toString();
        Services.deleteOrder(custom);
    };

    function handleNewCustomer(){
        // history.push('/');
        Services.newCustomer(customerName, customerFirstname);
    };

    // function handleNewRoom(){
    //     // history.push('/');
    //     // console.log("coucou")
    //     Services.createRoom("room", "test");
    // };
    // console.log(messageList)
    function handleAssignment(){
        // history.push('/');
        Services.assignClient("room", selectedClientForRoom);
    }

    function handleUserCreation(){
        // history.push('/');
        Services.signup(userEmail, userPassword, userRole);
    }



    return (
        <div className="admin_box">
            <div className="admin_element admin_orders">
                <select name="customersList"  onChange={(e) => setSelectedCustomer(e.target.value)}>
                    <option selected>Choisissez un client</option>
                    {customersList.map(({name, firstname}) => (
                        <option value={name} key={name}>{name} {firstname}</option>
                    ))}
                </select>
                {ordersList !== null ?(
                    <div>
                        <form onSubmit={() => handleDelete()}>
                            <button className="admin_deleteOrders">Supprimer la commande</button>
                        </form>
                        <ul className="admin_ordersList">
                            {ordersList.map(({id, name, price, amount,customer}, index) => (
                                customer === selectedCustomer ?(
                                <li key={index} className="admin_orderItem">
                                    <h2>{name}</h2>
                                    <p>Prix: {price}€</p>
                                    <p>Quantité: {amount}</p>
                                </li>
                                ) : null
                            ))}
                        </ul>
                    </div>
                ):null}
            </div>
            {messageList !== null ? (
                <div className="admin_element">
                <ul>
                    {messageList.map(({id, customer, object, message}) => (
                        <li key={id}>
                            <h3>Message de {customer}</h3>
                            <h5>{object}</h5>
                            <p>{message}</p>
                        </li>
                    ))}
                </ul>
            </div>
            ): null}
            
            <div className="admin_element">
                <div className="admin_box2">
                    <div className="customerAssignment admin_element2">
                        <h1>Assignation aux salles</h1>
                        <h2>Salle 1</h2>
                        {assignedClient !== null ? (
                            <p className="admin_assignedClient">Client actuel: {assignedClient}</p>
                        ):(
                            <p className="admin_assignedClient">Aucun client actuellement assigné</p>
                        )}
                        <select className="admin_assignSelect" name="customersList" onChange={(e) => setSelectedClientForRoom(e.target.value)}>
                            <option selected>Choisissez un client</option>
                            {customersList.map(({name, firstname}) => (
                                <option value={name} key={name}>{name} {firstname}</option>
                            ))}
                        </select>
                        <form onSubmit={() => handleAssignment()}>
                            <button  className="admin_button" /*onClick={() => setAssignedClient(selectedClientForRoom)}*/>Assigner à la salle</button>
                        </form>
                    </div>
                    <div className="CreateCustomer admin_element2">
                        <h2>Nouveau client</h2>
                        <form onSubmit={() => handleNewCustomer()}>
                            <label>Nom du client</label>
                            <input onChange={(e) => setCustomerName(e.target.value)} placeholder="Nom"/>
                            <label>Prénom du client</label>
                            <input onChange={(e) => setCustomerFirstname(e.target.value)} placeholder="Prénom"/>
                            <button className="admin_button">Confirmer</button>
                        </form>
                    </div>
                    {/* <button onClick={handleNewRoom}>Nouvelle salle</button> */}
                    <div className="admin_newUser admin_element2">
                        <h2>Nouvel utilisateur</h2>
                        <form onSubmit={handleUserCreation}>
                            <label>Email</label>
                            <input onChange={(e) => setUserEmail(e.target.value)} placeholder="Email" type="email"/>
                            <label>Mot de passe</label>
                            <input onChange={(e) => setUserPassword(e.target.value)} placeholder="Mot de passe"/>
                            <label>Rôle</label>
                            <select className="admin_role" onChange={(e) => setUserRole(e.target.value)}>
                                <option selected>Choisissez un rôle</option>
                                <option value="Admin">Admin</option>
                                <option value="Salle1">Salle 1</option>
                            </select>
                            <button className="admin_button">Valider</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;