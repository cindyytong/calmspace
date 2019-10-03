import React from 'react';
import { withRouter } from 'react-router-dom';

class DemoTherapist extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.logout();
    }

    loginDemoTherapist(demoTherapist) {
        return (e) => {
            this.props.login(demoTherapist)
                .then(() => this.props.history.push('/auth/therapist/dashboard'));
        }
    }

    render(){
        const therapists = this.props.demoTherapists.map( therapist => {
            return (
                <div className="single-therapist-container"
                    key={therapist.id}>
                    <button 
                        className="demo-therapist-button"
                        onClick={this.loginDemoTherapist(therapist)}>
                        Login As {therapist.first_name}
                    </button>
                </div>
            )
        });

        return (
            <div className="demo-therapist-container">
                <h1>Login as a demo therapist</h1>
                <ul>
                    {therapists}
                </ul>
            </div>
        )
    }
}

export default DemoTherapist;

