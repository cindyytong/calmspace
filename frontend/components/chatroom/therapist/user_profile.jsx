import React from 'react';
import { connect } from 'react-redux';
import { getUserChatRoom } from '../../../actions/chat_room_actions';

const mapStateToProps = state => {
    debugger
    return {
        user: Object.values(state.entities.users)[0], 
        chatroom: Object.values(state.entities.chatrooms)[0]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUserChatRoom: (chatRoomId) => dispatch(getUserChatRoom(chatRoomId))
    }
};

class UserProfile extends React.Component{

    render(){
        debugger
        const chatroom = this.props.chatroom;
            return (
                <>
                <div className="therapist-profile-container">
                   <div className="patient-info">
                        <h4 className="about-therapist-headline">About Your Patient</h4>
                        <h6 className="patient-header">Username:</h6>
                        <p className="patient-desc">{chatroom.user.username}</p>
                        <h6 className="patient-header">Member since:</h6>
                        <p className="patient-desc">{chatroom.user.created_at.split("T")[0]}</p>
                        <h6 className="patient-header">Therapy Goals:</h6>
                        <p className="patient-desc">{chatroom.user.goals}</p>
                        <h6 className="patient-header">Number of Messages Exchanged</h6>
                        <p className="patient-desc">{chatroom.messages.length}</p>
                    </div>
                </div>
                </>
        );
    }
} 
    

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
