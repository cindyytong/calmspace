import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import NavBar from './navigation/navbar';
import UserLogInFormContainer from '../components/session_form/user_login_form_container';
import UserSignUpFormContainer from './session_form/user_signup_form_container'
import TherapistLogInFormContainer from '../components/session_form/therapist_login_form_container';

// components 

const App = () => (
    <div>
        <header>
        <a href="http://domain.com" target="_private">Link</a>
                <NavBar />
        </header>
    <Switch>
        <Route exact path="/user/login" component={UserLogInFormContainer}/>
        <Route exact path="/therapist/login" component={TherapistLogInFormContainer}/>
        <Route exact path="/user/signup" component={UserSignUpFormContainer}/>
    </Switch> 
    </div>
);

export default App; 