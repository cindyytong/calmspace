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

//Global Components 
import Splash from './splash/splash';
import Footer from './footer/footer';

// Patient Components 
import UserLogInFormContainer from './session_form/user_login_form_container';
import UserSignUpFormContainer from './session_form/user_signup_form_container';
import OnboardContainer from './onboard/onboard_container';
import MatchContainer from './matches/match_container';
import AuthLanding from './auth_landing/auth_landing';
import UserChatDashboard from './chatroom/user/user_chat_dashboard';

// Therapist Components 
import DemoTherapistContainer from './demo_therapist/demo_therapist_container';
import TherapistChatDashboard from './chatroom/therapist/therapist_chatroom';
// Chat

// import TherapistChatroom from './chatroom/therapist_chatroom';

const App = () => (
    <>  
    <Switch> 
        {/* Logged Out */}
        <AuthRoute exact path="/user/login" component={UserLogInFormContainer}/>
        <AuthRoute exact path="/user/signup" component={UserSignUpFormContainer}/>
        <AuthRoute exact path="/therapist/login" component={DemoTherapistContainer}/>
        <AuthRoute exact path='/' component={Splash}/>

        {/* User */}
        <ProtectedRoute exact path="/auth/user/onboard" component={OnboardContainer}/>
        <ProtectedRoute exact path="/auth/landing" component={AuthLanding}/>
        <ProtectedRoute exact path="/auth/user/:userId/matches" component={MatchContainer}/>
        <ProtectedRoute exact path="/auth/user/chatroom/:chatRoomId" component={UserChatDashboard}/>

        {/* Therappist */}
        <ProtectedRoute exact path="/auth/therapist/chatroom/:chatRoomId" component={TherapistChatDashboard}/>
    </Switch>        
    </>

);

export default App; 