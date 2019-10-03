import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div>
            <h1>Therapy for All</h1>
        <p className="subheader">Join one million people who already feel happier</p>
        <p>With Calmspace online therapy, anyone can get therapy without traveling to an office - and for significantly less money than traditional therapy.</p>
        <p>Start therapy now with a licensed therapist that understands how you live your life today.</p>
        {/* <a href="/user/login" type="button" className="btn green-btn">GET STARTED</a> */}
   
        <Link to="/user/login" className="btn btn-primary green-btn black-shadow">GET STARTED</Link>
      
        </div>
    )
}

export default Splash; 