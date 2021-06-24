import React from 'react';
import {useState, useEffect} from 'react';
import services from '../services';
import {useHistory} from 'react-router-dom';
import '../CSS/Login.scss';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [log, setLog] = useState(false);
    const history = useHistory();

    useEffect(() => {
        services.login(email,password)    
        .then(() => history.push('/'));
        setLog(false);
    }, [log])

    // function handleLogin(){
    //     services.login(email, password);
    // }

    return (
        <div className="login_form">
            <h1 className="login_h1">Connexion</h1>
            {/* <form /*onSubmit={() => handleLogin()}> */}
                <label className="login_label">Email</label>
                <input className="login_input" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <label className="login_label">Mot de passe</label>
                <input className="login_input" type= "password" onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe"/>
                <button className="login_button" /*onClick={handleLogin()}*/ onClick={() => setLog(true)}>Connexion</button>
            {/* </form> */}
        </div>
    );
};

export default Login;