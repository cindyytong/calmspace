import React from 'react';
import { Link } from 'react-router-dom';

// add signoff on logout button click 
class AuthNavBar extends React.Component{
   
    render(){
        // determine welcome message based on user type
        debugger
        let userIdentifier; 
        if(typeof currentUser.username !== null ){
            userIdentifier= this.props.currentUser.username
        } else {
            userIdentifier='Welcome'
        }

        <div className="auth-navigation-bar">
            <img className="logo" src="https://rasa.com/static/talkspace_logo-3970f7ac25fef2f58caf690071a53c0d.svg"/>
            <button>{userIdentifier}</button>
            <button onClick={this.props.logout}>Signout</button>
        </div>
    }
};

export default AuthNavBar;