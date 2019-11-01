import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AuthNavBar extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.logout() 
        .then(() => this.props.history.push(`/`));
    }
   
    render(){
        let currentUser; 
        let homeLink; 
        let settingsLink;
        if(this.props.session.memberType === 'User'){
            currentUser = this.props.users[this.props.session.currentUserId];
            homeLink = "#";
            settingsLink = `/auth/user/settings`;
            debugger
        } else {
            currentUser = this.props.therapists[this.props.session.currentUserId];
            homeLink =  `/auth/therapist/${currentUser.id}/dashboard`;
            settingsLink = `/auth/therapist/settings`;
        }
       
        return (
                <nav className="navigation-bar green-fill">
                <Link to={homeLink}> <img src={window.whitelogoURL} className="nav-logo"/></Link>
                <ul className="nav-right">
                    <li className="auth-nav-welcome">Hello {currentUser.username}</li>
                    <Link to={settingsLink} className="auth-nav-welcome">Settings</Link>
                    <li className="logout"><button className="logout-button" onClick={this.handleSubmit}>Log Out</button></li>
                </ul>
            </nav>
        )
    }
};

export default withRouter(AuthNavBar);