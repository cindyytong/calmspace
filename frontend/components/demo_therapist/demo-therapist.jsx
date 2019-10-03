import React from 'react';
import { withRouter } from 'react-router-dom';

class DemoTherapist extends React.Component{
    constructor(props){
        super(props);
    }

    loginDemoTherapist1(e){
        e.preventDefault();
        this.props.processForm({ email: 'user1@calmspace.com', password: '12345678'})
        .then(() => this.props.history.push('/auth/user/chatroom/1'));
    };

    render(){
        return(
            <h1>Demo Therapist</h1>
        )
    }

    // render(){
    //     return (
    //         <div className="demo-therapist-container">
    //             <h1>Login as a therapist</h1>
    //             <div className="demo-therapist-profile">
    //                 <h3>Sarah Lee</h3>
    //                 <button 
    //                     className="demo-therapist-button"
    //                     onClick={this.loginDemoTherapist1}>
    //                     Login As Sarah
    //                 </button>
    //             </div>
    //         </div>
    //     )
    // }
}

export default DemoTherapist;

