import Services from '../services';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Admin.scss';
// import notif from '../Audio/notif.wav';
// import {useHistory} from 'react-router-dom';



function Admin({assignedClient, setAssignedClient}){
    const [ordersList, setOrdersList] = useState([]);
    const [customersList, setCustomersList] = useState([]);
    const [customerName, setCustomerName] = useState('');
    const [customerFirstname, setCustomerFirstname] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [selectedClientForRoom, setSelectedClientForRoom] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [messageList, setMessageList] = useState([]);
    const [isRoom1Locked, setIsRoom1Locked]  = useState(false);


    useEffect(() => {
        Services.isLocked("room")
            .then(res => setIsRoom1Locked(res.data.isLocked));
    }, []);
    
    
    useEffect(() => {
        Services.seeOrder()
                .then((res) => setOrdersList(res.data))
        const interval = setInterval(() => {
            Services.seeOrder()
                .then((res) => setOrdersList(res.data));
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {

        Services.getMessages()
                .then((res) => setMessageList(res.data))        

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
    };

    function handleUserCreation(){
        // history.push('/');
        Services.signup(userEmail, userPassword, userRole);
    };

    function handleReaded(id){
        Services.setAsReaded(id);
    };

    function handleDeleteMessage(id){
        Services.deleteMessage(id);
    };

    function handleDone(id){
        Services.setOrderAsDone(id);
        Services.newAdminMessage("Votre commande est prête à être récupérée aux vestiaires", selectedCustomer, true);
    };

    function handlePrep(id){
        Services.setOrderAsInPrep(id);
        Services.newAdminMessage("Votre commande à bien été prise en compte et est en cours de préparation", selectedCustomer, true);
    };

    function handleLock(room){
        Services.lockRoom(room);
    };

    function handleDelock(room){
        Services.delockRoom(room);
    };



    return (
        <div className="admin_box">
            <div className="admin_element admin_orders">
                <select name="customersList"  onChange={(e) => setSelectedCustomer(e.target.value)}>
                    <option>Choisissez un client</option>
                    {customersList.map(({name, firstname}) => (
                        <option value={name} key={name}>{name} {firstname}</option>
                    ))}
                </select>
                {ordersList !== [] ?(
                    <div>
                        <form onSubmit={() => handleDelete()}>
                            <button className="admin_deleteOrders">Supprimer la commande</button>
                        </form>
                        <ul className="admin_ordersList">
                            {ordersList.map(({_id, name, price, amount,customer,isReceived , done}, index) => (
                                customer === selectedCustomer ?(
                                    isReceived ? (
                                        done ? (
                                            <li key={index} className="admin_orderItem">
                                                <h2>{name}</h2>
                                                <p>Prix: {price}€</p>
                                                <p>Quantité: {amount}</p>
                                            </li>
                                        ):(
                                            <li key={index} className="admin_orderItem admin_inPrep_order">
                                                <h2>{name}</h2>
                                                <p>Prix: {price}€</p>
                                                <p>Quantité: {amount}</p>
                                                <form onSubmit={() => handleDone(_id)}>
                                                    <button className="admin-done">Done</button>
                                                </form>
                                            </li>
                                        )
                                    ):(
                                        <li key={index} className="admin_orderItem admin_undone_order">
                                                <h2>{name}</h2>
                                                <p>Prix: {price}€</p>
                                                <p>Quantité: {amount}</p>
                                                <form onSubmit={() => handlePrep(_id)}>
                                                    <button className="admin-done">En préparation</button>
                                                </form>
                                            </li>
                                    )                                
                                ) : null
                            ))}
                        </ul>
                    </div>
                ):null}
            </div>
            {messageList !== null ? (
                <div className="admin_element admin_messageList">
                    <Link to="/Admin/Message" className="admin_link"><button className="admin_button">Message</button></Link>
                <ul>
                    {messageList.map(({_id, customer, object, message, is_New}) => (
                        is_New ? (
                            <li key={_id} className="admin_message">
                                <h3 className="admin_new_message">Message de {customer}</h3>
                                <h5 className="admin_new_message">{object}</h5>
                                <p className="admin_new_message">{message}</p>
                                <form onSubmit={() => handleReaded(_id)}>
                                    <button className="admin_button">Marquer comme lu</button>
                                </form>
                            </li>
                        ): (
                            <li key={_id} className="admin_message">
                                <h3>Message de {customer}</h3>
                                <h5>{object}</h5>
                                <p>{message}</p>
                                <form onSubmit={() => handleDeleteMessage(_id)}>
                                    <button className="admin_button">Supprimer</button>
                                </form>
                            </li>
                        )
                        
                    ))}
                </ul>
            </div>
            ): null}
            
            <div className="admin_element">
                <div className="admin_box2">
                    <div className="customerAssignment admin_element2">
                        <h2>Assignation aux salles</h2>
                        <h3>Salle 1</h3>
                        {isRoom1Locked ? (
                            <form onSubmit={() => handleDelock("room")}>
                                <button className="admin_button">Déverrouiller la salle</button>
                            </form>
                        ):(
                            <form onSubmit={() => handleLock("room")}>
                                <button className="admin_button">Verrouiller la salle</button>
                            </form>
                        )}
                        {assignedClient !== null ? (
                            <p className="admin_assignedClient">Client actuel: {assignedClient}</p>
                        ):(
                            <p className="admin_assignedClient">Aucun client actuellement assigné</p>
                        )}
                        <select className="admin_assignSelect" name="customersList" onChange={(e) => setSelectedClientForRoom(e.target.value)}>
                            <option>Choisissez un client</option>
                            {customersList.map(({name, firstname}) => (
                                <option value={name} key={name}>{name} {firstname}</option>
                            ))}
                        </select>
                        <form onSubmit={() => handleAssignment()}>
                            <button className="admin_button" /*onClick={() => setAssignedClient(selectedClientForRoom)}*/>Assigner à la salle</button>
                        </form>
                    </div>
                    <div className="CreateCustomer admin_element2">
                        <h3>Nouveau client</h3>
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
                        <h3>Nouvel utilisateur</h3>
                        <form onSubmit={handleUserCreation}>
                            <label>Email</label>
                            <input onChange={(e) => setUserEmail(e.target.value)} placeholder="Email" type="email"/>
                            <label>Mot de passe</label>
                            <input onChange={(e) => setUserPassword(e.target.value)} placeholder="Mot de passe"/>
                            <label>Rôle</label>
                            <select className="admin_role" onChange={(e) => setUserRole(e.target.value)}>
                                <option>Choisissez un rôle</option>
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