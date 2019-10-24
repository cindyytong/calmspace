import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

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
        const { currentUser} = this.props;
        return (
                <nav className="navigation-bar green-fill">
                <Link to="/"> <img src={window.whitelogoURL} className="nav-logo"/></Link>
                <ul className="nav-right">
                    <li className="auth-nav-welcome">Hello {currentUser.username}</li>
                    <li className="logout"><button className="logout-button" onClick={this.handleSubmit}>Log Out</button></li>
                </ul>
               
            </nav>
        )
    }
};

export default withRouter(AuthNavBar);