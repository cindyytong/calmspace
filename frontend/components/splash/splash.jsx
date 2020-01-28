import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBar from '../navigation/navbar'
import Footer from '../footer/footer';

const Splash = () => {
    return (
        <>
        <NavBar />
        <div className="splash-page-container">  
            <div className="splash-content">
                <div className="splash-text">
                    <h1 className="white headline">Therapy for All</h1>
                    <p className="white subheader">Join one million people who already feel happier</p>
                    <p className="white">With Calmspace online therapy, anyone can get therapy without traveling to an office - and for significantly less money than traditional therapy.</p>
                    <p className="white">Start therapy now with a licensed therapist that understands how you live your life today.</p>
                </div>
                <Link to="/user/signup" className="green-fill white btn-primary">Get Started</Link>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Splash; 