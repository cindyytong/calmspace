import React from 'react';
import { Link } from 'react-router-dom';

class AuthNavBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentUser: this.props.currentUser
        } 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.logout() 
        .then(() => this.props.history.push(`/`));
    }
   
    render(){
        const { currentUser, logout } = this.props;
        return (
            <div className="auth-navigation-bar">
                <img className="nav-logo" src="https://rasa.com/static/talkspace_logo-3970f7ac25fef2f58caf690071a53c0d.svg"/>
                <button>Hello {currentUser.username}</button>
                <button className="header-button" onClick={this.handleSubmit}>Log Out</button>
            </div>
        )
    }
};

export default AuthNavBar;