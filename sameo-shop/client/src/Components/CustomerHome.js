import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import services from '../services';
import '../CSS/CustomerHome.scss';
import Popup from './Popup';

function CustomerHome({room}){

    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [isLocked, setIsLocked] = useState(false);
    const [adminMessages, setAdminMessages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        services.getAssignedClient("room")
            .then((res) => setSelectedCustomer(res.data.client));
        // console.log(assignedClient)
        const interval = setInterval(() => {
            services.getAssignedClient("room")
                .then((res) => setSelectedCustomer(res.data.client));
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        services.isLocked(room)
            .then((res) => setIsLocked(res.data.isLocked));

        services.getAdminMessage(selectedCustomer)
            .then((res) => setAdminMessages(res.data));

        const interval = setInterval(() => {
            services.isLocked(room)
                .then((res) => setIsLocked(res.data.isLocked));

            services.getAdminMessage(selectedCustomer)
                .then((res) => setAdminMessages(res.data));
        }, 10000);

        return () => clearInterval(interval);

    }, [room, selectedCustomer]);

    function togglePopup(id){
        services.deleteAdminMessage(id);
        window.location.reload()
    };

    console.log(adminMessages)
    
    return !isLocked? (
        <div className="customerHome">
            {/* {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />} */}
            {adminMessages.map(({_id, customer, message, isPopUp}) => (
                customer === selectedCustomer?(
                    isPopUp?(
                        <Popup content={message} id={_id} handleClose={togglePopup}/>
                    ): null
                ): console.log(customer, selectedCustomer)

                
                ))}
            <h2>Bonjour M/Mme {selectedCustomer},</h2>
            <h2>Bienvenue dans votre espace bien-être</h2>
            <div className="customerHome_buttons">
                <Link to="/Salle1/Shop" className="customerHome_link"><h3 className="customerHome_button">Commander un extra</h3></Link>
                <Link to="/Salle1/Message" className="customerHome_link"><h3 className="customerHome_button">Envoyer un message</h3></Link>
            </div>
        </div>
    ):(
        <div className="customerHome customerHome_locked">
            <h2>Votre séance se termine bientôt.</h2>
            <h2>Merci de vous diriger vers les vestiaires.</h2>
            <h2>A bientôt !!!</h2>
            <h2 className="customerHome_locked_wavyHand">👋</h2>
            <div className="customerHome_buttons">
                <Link to="/Salle1/Message" className="customerHome_link"><h3 className="customerHome_button">Envoyer un message</h3></Link>
            </div>
        </div>
    );
};

export default CustomerHome;