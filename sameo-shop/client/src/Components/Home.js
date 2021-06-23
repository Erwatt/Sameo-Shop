import React from "react";
import {Link} from "react-router-dom";
import services from '../services';
import '../CSS/Home.css';

function Home(){

    const user = services.getCurrentUser();
    let isAuthenticated = '';
    let isAdmin = false;
    let isSalle1 = false;

    if (user){
        isAuthenticated = user.token;

        if (user.message.role.includes('Admin')){
            isAdmin = true;
        };
        if (user.message.role.includes('Salle1')){
            isSalle1 = true;
        };
    };

    function logout(){
        services.logout();
    };

    // console.log(isAuthenticated)
    return (isAuthenticated && isAdmin) ? (
        <div className="home_box">
            <Link to="/Salle1"><button className="home_button">Salle piscine</button></Link>
            <Link to="/Admin"><button className="home_button">Admin</button></Link>
            <form onSubmit={() => logout()}>
                    <button className="home_button">Se déconnecter</button>
            </form>
        </div>
    ):( 
        (isAuthenticated && isSalle1) ? (
            <div className="home_box">
                <Link to="/Salle1"><button className="home_button">Salle piscine</button></Link>
                <form onSubmit={() => logout()}>
                    <button className="home_button">Se déconnecter</button>
                </form>
            </div>
        ):(
            <div className="home_box">
                <Link to="/SignIn"><button className="home_button">Login</button></Link>
            </div>
        )
    );
};

export default Home;