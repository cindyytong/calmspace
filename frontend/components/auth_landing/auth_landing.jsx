import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import AuthNavBar from '../navigation/authnavbar';

const Splash = () => {
    return (
        <>
        <AuthNavBar />
        <div className="splash-page-container">  
            <div className="splash-content">
                <div className="splash-text">
                    <h1 className="white headline">Therapy for All</h1>
                    <p className="white subheader">Join one million people who already feel happier</p>
                    <p className="white">With Calmspace online therapy, anyone can get therapy without traveling to an office - and for significantly less money than traditional therapy.</p>
                    <p className="white">Start therapy now with a licensed therapist that understands how you live your life today.</p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default withRouter(Splash); 