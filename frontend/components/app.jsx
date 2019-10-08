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
// import NavBar from './navigation/navbar';
// import SimpleNavBar from './navigation/simplenavbar';
// import AuthNavBarContainer from './navigation/auth_nav_container';
import Splash from './splash/splash';
import Footer from './footer/footer';

// Patient Components 
import UserLogInFormContainer from './session_form/user_login_form_container';
import UserSignUpFormContainer from './session_form/user_signup_form_container';
import OnboardContainer from './onboard/onboard_container';
import MatchContainer from './matches/match_container';
import UserChatroom from './chatroom/user_chatroom';
import AuthLanding from './auth_landing/auth_landing';

// Therapist Components 
import DemoTherapistContainer from './demo_therapist/demo_therapist_container';
import TherapistDashboardContainer from './therapist_dashboard/therapist_dashboard_container';

const App = () => (
    <>  
    <Switch> 
        <AuthRoute exact path="/user/login" component={UserLogInFormContainer}/>
        <AuthRoute exact path="/user/signup" component={UserSignUpFormContainer}/>
        <AuthRoute exact path="/therapist/login" component={DemoTherapistContainer}/>
        <AuthRoute exact path='/' component={Splash}/>
        <ProtectedRoute exact path="/auth/user/onboard" component={OnboardContainer}/>
        <ProtectedRoute exact path="/auth/landing" component={AuthLanding}/>
        <ProtectedRoute exact path="/auth/user/:userId/matches" component={MatchContainer}/>
        <ProtectedRoute exact path="/auth/user/:userId/chatroom" component={UserChatroom}/>
        <ProtectedRoute exact path="/auth/therapist/dashboard" component={TherapistDashboardContainer}/>
    </Switch>        
    </>

);

export default App; 