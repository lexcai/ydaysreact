import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/">
                Acceuil
            </NavLink>
            <NavLink exact to="/a-propos">
                A propos
            </NavLink>
            <NavLink exact to="/connexion">
                Connexion
            </NavLink>
        </div>
    );
};

export default Navigation;