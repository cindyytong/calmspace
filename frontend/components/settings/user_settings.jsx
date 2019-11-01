import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class UserSettings extends React.Component { 
    render(){
        return(
            <h1>User Settings</h1>
        )
    }
}

export default withRouter(UserSettings);