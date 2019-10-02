import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import UserLogInFormContainer from '../components/session_form/user_login_form_container';
import UserSignUpFormContainer from './session_form/user_signup_form_container'
import TherapistLogInFormContainer from '../components/session_form/therapist_login_form_container';

const App = () => (
    <div>
        <header>
            <Link to="/">
                <h1>Calmspace</h1>
            </Link>
        </header>
    <Switch>
        <AuthRoute exact path="/users/login" component={UserLogInFormContainer}/>
        <AuthRoute exact path="/users/signup" component={UserSignUpFormContainer}/>
        <AuthRoute exact path="/therapists/login" component={TherapistLogInFormContainer}/>
    </Switch> 
    </div>
);

export default App; 