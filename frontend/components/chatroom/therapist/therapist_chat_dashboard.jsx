import React from 'react';
import { connect } from 'react-redux';
import AuthNavContainer from '../../navigation/auth_nav_container';
import ChatRoomContainer from '../chatroom_container';
import UserProfile from './user_profile';

class TherapistChatDashboard extends React.Component  { 
    render() {
        return (
            <>
            <AuthNavContainer />
            <div className="user-chat-page-container">
                <UserProfile />
                <ChatRoomContainer />
            </div>
            </>
        )
    }  
};

export default TherapistChatDashboard;
