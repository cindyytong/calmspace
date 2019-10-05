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

// Global Components 
import NavBar from './navigation/navbar';
import SimpleNavBar from './navigation/simplenavbar';
import AuthNavBarContainer from './navigation/auth_nav_container';
import Splash from './splash/splash';
import Footer from './footer/footer';

// Patient Components 
import UserLogInFormContainer from './session_form/user_login_form_container';
import UserSignUpFormContainer from './session_form/user_signup_form_container';
import OnboardContainer from './onboard/onboard_container';
import UserChatroom from './chatroom/user_chatroom'

// Therapist Components 
import DemoTherapistContainer from './demo_therapist/demo_therapist_container';
import TherapistDashboardContainer from './therapist_dashboard/therapist_dashboard_container';

const App = () => (
    <>
    <header>
    {/* Logged Out Nav */}
            <Route exact path='/' component={NavBar}/>
            <Route exact path='/user/login' component={SimpleNavBar}/>
            <Route exact path='/user/signup' component={SimpleNavBar}/>
            <Route exact path='/therapist/login' component={NavBar}/>
    {/* Logged In Nav */}
            <ProtectedRoute path='/auth' component={AuthNavBarContainer}/>
    </header>
        
    {/* Logged out views */}
        <Route exact path='/' component={Splash}/>
        <AuthRoute exact path="/user/login" component={UserLogInFormContainer}/>
        <AuthRoute exact path="/user/signup" component={UserSignUpFormContainer}/>
        <AuthRoute exact path="/therapist/login" component={DemoTherapistContainer}/>

    {/* Auth routes  */}
        <ProtectedRoute exact path="/auth/user/:userId/onboard" component={OnboardContainer}/>
        <ProtectedRoute path="/auth/user/chatroom" component={UserChatroom}/>
        <ProtectedRoute path="/auth/therapist/dashboard" component={TherapistDashboardContainer}/>

    <footer>
        <Route exact path='/' component={Footer} />
        <Route exact path='/therapist/login' component={Footer} />
    </footer>
    </>

);

export default App; 