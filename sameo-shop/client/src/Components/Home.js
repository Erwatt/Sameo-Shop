import React from "react";
import {Link} from "react-router-dom";

function Home(){

    
    return (
        <div>
            <Link to="/SignIn"><button>Login</button></Link>
            <Link to="/Salle1"><button>Salle piscine</button></Link>
            <Link to="/Admin"><button>Admin</button></Link>
        </div>
    );
};

export default Home;