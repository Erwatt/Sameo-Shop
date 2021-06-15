import React from 'react';
import {useState} from 'react';
import services from '../services';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        services.login(email, password);
    }

    return (
        <div>
            <h1>Connexion</h1>
            <form onSubmit={() => handleLogin()}>
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <label>Mot de passe</label>
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe"/>
                <button>Connexion</button>
            </form>
        </div>
    );
};

export default Login;