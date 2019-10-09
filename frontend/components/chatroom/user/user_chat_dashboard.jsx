import React from 'react';
import { connect } from 'react-redux';
import AuthNavContainer from '../../navigation/auth_nav_container';
import TherapistProfile from '../user/therapist_profile';
import ChatRoomContainer from '../chatroom_container';

class UserChatDashboard extends React.Component  { 
    render() {
        return (
            <>
            <AuthNavContainer />
            <div className="user-chat-page-container">
                <TherapistProfile />
                <ChatRoomContainer />
    
            </div>
            </>
        )
    }  
};

export default UserChatDashboard;
