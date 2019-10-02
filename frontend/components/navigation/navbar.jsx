import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="splash-navigation-bar">
            <img className="logo" src="https://rasa.com/static/talkspace_logo-3970f7ac25fef2f58caf690071a53c0d.svg"/>
            <Link to={'/users'}>Signup</Link>
            <Link to={`/session/user`}>Login</Link>
        </div>
    )
};

export default NavBar;
