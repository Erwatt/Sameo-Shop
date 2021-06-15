import React from 'react';
import {Redirect} from 'react-router-dom';
import services from '../services';

function ProtectedRoute({component: Component, role}){
    const currentUser = services.getCurrentUser();
    let isAuthenticated = '';
    let isAuthorized = false;

    if (currentUser){
        isAuthenticated = currentUser.token;

        role.map(roles => {
            if(currentUser.message.role.includes(roles)){
                isAuthorized = true;
            };
            return isAuthorized;
        });
    };

    return (isAuthenticated && isAuthorized)? (
        <Component/>
    ):(
        <Redirect to={{pathname:'/'}}/>
    );
};

export default ProtectedRoute;