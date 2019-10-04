import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div className="page-container ">  
            <div className="splash-container">
            <img src={window.splashURL} id="splash-image"/>
            <div className="col-1-2 splash-content">
                <div className="section-text">
                    <h1 className="white headline">Therapy for All</h1>
                    <p className="subheader white">Join one million people who already feel happier</p>
                    <p className="white">With Calmspace online therapy, anyone can get therapy without traveling to an office - and for significantly less money than traditional therapy.</p>
                    <p className="white">Start therapy now with a licensed therapist that understands how you live your life today.</p>
                </div>
                <Link to="/user/login" className="green-fill white btn-primary ">Get Started</Link>
            </div>
            </div>
        </div>
    )
}

export default Splash; 