import '../CSS/Header.scss';
import React from 'react';
// import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import homeLogo from '../Images/logo-maison.png';
import logotxt from '../Images/Logo-txt.png';

function Header(){
    // const history = useHistory();
    // const handleAdmin=()=>{
    //     history.push("/admin");
    // };

    return (
        <header>
            <div className="Header">
                <img src={logotxt} alt="La Couture du Charme" className="header_logo"/>
                {/* <h1>La Couture du Charme</h1> */}
                <div className="header-right">
                    <h2>Saméo-Shop</h2>
                    <Link to={"/"}><img src={homeLogo} alt="Home" className="header_img"/></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;