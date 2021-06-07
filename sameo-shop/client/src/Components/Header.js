import '../CSS/Header.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

function Header(){
    const history = useHistory();
    const handleAdmin=()=>{
        history.push("/Admin");
    };

    return (
        <header>
            <div className="Header">
                <h1>La Couture du Charme</h1>
                <h2>Saméo-Shop</h2>
                <p onClick={handleAdmin}>Admin</p>
            </div>
        </header>
    );
}

export default Header;