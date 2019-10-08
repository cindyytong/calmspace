import React from 'react';
import { connect } from 'react-redux';
import AuthNavContainer from '../../navigation/auth_nav_container';
import TherapistProfile from '../user/therapist_profile';
import ChatRoom from '../chatroom';
import { getUserChatRoom, createChatRoom } from '../../../actions/chat_room_actions';
import { fetchTherapist } from '../../../actions/therapist_actions';


const mapStateToProps = state => {
    debugger
    return {
        user: state.entities.users,
        chatrooms: {},
        messages: {},
        errors: state.errors.session
    }
};

const mapDispatchToProps = dispatch => {
    debugger
    return {
        clearErrors: () => dispatch(clearErrors()),
        createChatRoom: (chatRoom) => dispatch(createChatRoom(chatRoom)),
        getUserChatRoom: (userId) => dispatch(getUserChatRoom(userId)),
        fetchTherapist: (id) => dispatch(fetchTherapist)
    }
};

class UserChatDashboard extends React.Component  { 
    render() {
        return (
            <>
            <AuthNavContainer />
            <div className="user-chat-page-container">
                <TherapistProfile />
                {/* <ChatRoom /> */}
    
            </div>
            </>
        )
    }  
};

export default connect(mapStateToProps, mapDispatchToProps)(UserChatDashboard);
