import '../CSS/Header.scss';
import React from 'react';
// import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import homeLogo from '../Images/logo-maison.png';

function Header(){
    // const history = useHistory();
    // const handleAdmin=()=>{
    //     history.push("/admin");
    // };

    return (
        <header>
            <div className="Header">
                <h1>La Couture du Charme</h1>
                <h2>Saméo-Shop</h2>
                {/* <p onClick={handleAdmin}>Admin</p> */}
                <Link to={"/"}><img src={homeLogo} alt="Home" className="header_img"/></Link>
            </div>
        </header>
    );
}

export default Header;