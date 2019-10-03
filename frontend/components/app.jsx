import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

import NavBar from './navigation/navbar';
import AuthNavBarContainer from './navigation/auth_nav_container';
import UserLogInFormContainer from './session_form/user_login_form_container';
import UserSignUpFormContainer from './session_form/user_signup_form_container'
// import DemoTherapistContainer from './demo_therapist/demo-therapist-container';
import UserChatroom from './chatroom/user_chatroom'
import OnboardContainer from './onboard/onboard-container';


const App = () => (
    <div>
        <header>
            {/* Logged Out Nav */}
            <Route exact path='/' component={NavBar}/>
            <Route exact path='/user/login' component={NavBar}/>
            <Route exact path='/user/signup' component={NavBar}/>
            <Route exact path='/therapist/demo' component={NavBar}/>
            {/* Logged In Nav */}
            <ProtectedRoute path='/auth' component={AuthNavBarContainer}/>
        </header>
    
        <AuthRoute exact path="/user/login" component={UserLogInFormContainer}/>
        <AuthRoute exact path="/user/signup" component={UserSignUpFormContainer}/>
        {/* <Route exact path="/therapist/demo" component={DemoTherapistContainer}/> */}

{/* Auth routes  */}
        <Route path="/auth/user/chatroom" component={UserChatroom}/>
        <Route exact path="/auth/user/onboard" component={OnboardContainer}/>

    </div>
);

export default App; 