import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navigation-bar splash-nav">
            <img className="nav-logo" src="https://rasa.com/static/talkspace_logo-3970f7ac25fef2f58caf690071a53c0d.svg"/>
            <ul className="nav-right">
                <li className="nav-item"><Link className="nav-link" to={'/user/signup'}>Sign up</Link></li>
                <li className="nav-item"><Link className="nav-link log-in" to={`/user/login`}>Log in</Link></li>
            </ul>
        </nav>
    )
};

export default NavBar;
