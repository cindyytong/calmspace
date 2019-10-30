import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SimpleNavBar from '../navigation/simplenavbar'

class DemoTherapist extends React.Component{
    constructor(props){
        super(props);
    }

    loginDemoTherapist(demoTherapist, type) {
        return (e) => {
            this.props.login(demoTherapist, type)
                .then((therapistId) => this.props.history.push(`/auth/therapist/${therapistId}/dashboard`));
        }
    }


    render(){
        const therapists = this.props.demoTherapists.map( therapist => {
            return (
                <div className="single-therapist-container" key={therapist.username}>
                    <img src={therapist.image} id="splash-image"/>
    
                    <Link to="/auth/therapist/dashboard"
                        className="therapist-name"
                        onClick={this.loginDemoTherapist(therapist, 'therapist')}>
                        {therapist.first_name}
                    </Link>
                </div>
            )
        });

        return (
            <>
            <SimpleNavBar />
            <div className="demo-therapist-container">
                <h4 className="demo-therapist-heading grey">Log In as a Demo Therapist</h4>
                <ul className="therapist-boxes">
                    {therapists}
                </ul>
            </div>
            </>
        )
    }
}

export default DemoTherapist;

