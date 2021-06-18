import React from 'react';
import {useState, useEffect} from 'react';
import services from '../services';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [log, setLog] = useState(false);
    

    useEffect(() => {
        services.login(email,password);
        setLog(false);
    }, [log])

    // function handleLogin(){
    //     services.login(email, password);
    // }

    return (
        <div>
            <h1>Connexion</h1>
            {/* <form /*onSubmit={() => handleLogin()}> */}
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <label>Mot de passe</label>
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe"/>
                <button /*onClick={handleLogin()}*/ onClick={() => setLog(true)}>Connexion</button>
            {/* </form> */}
        </div>
    );
};

export default Login;