import '../CSS/Header.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import homeLogo from '../Images/logo-maison.png';
import logotxt from '../Images/Logo-txt.png';
import {useState, useEffect} from 'react';

function Header(){

    const [time, setTime] = useState('');


    useEffect(() => {
        var time = new Date().toLocaleTimeString();
        setTime(time);

        const interval = setInterval(() => {
            time = new Date().toLocaleTimeString();
            setTime(time);
        }, 1000);

        return () => clearInterval(interval);

    }, [])


    return (
        <header>
            <div className="Header">
                <p className="header-time">{time}</p>
                <img src={logotxt} alt="La Couture du Charme" className="header_logo"/>
                <div className="header-right">
                    <h2>Saméo-Shop</h2>
                    <Link to={"/"}><img src={homeLogo} alt="Home" className="header_img"/></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;