import React from 'react';
import { Link } from 'react-router-dom';

const SimpleNavBar = () => {
    return (
        <nav className="navigation-bar simple-nav green-fill">
            <Link to="/"> <img src={window.whitelogoURL} className="nav-logo"/></Link>
        </nav>
    )
};

export default SimpleNavBar;
