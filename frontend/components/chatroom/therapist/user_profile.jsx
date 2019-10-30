import React from 'react';
import { connect } from 'react-redux';
import { getUserChatRoom } from '../../../actions/chat_room_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        chatrooms: state.entities.chatrooms,
        users: state.entities.users 
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUserChatRoom: (chatRoomId) => dispatch(getUserChatRoom(chatRoomId))
    }
};

class UserProfile extends React.Component{
    render(){
        const chatroom = this.props.chatrooms[this.props.match.params.chatRoomId];
        const patient = this.props.users[chatroom.user_id];
            return (
                <>
                <div className="therapist-profile-container">
                   <div className="patient-info">
                        <h4 className="about-therapist-headline">About Your Patient</h4>
                        <h6 className="patient-header">Username:</h6>
                        <p className="patient-desc">{patient.username}</p>
                        <h6 className="patient-header">Member since:</h6>
                        <p className="patient-desc">{patient.created_at.split("T")[0]}</p>
                        <h6 className="patient-header">Therapy Goals:</h6>
                        <p className="patient-desc">{patient.goals}</p>
                    </div>
                </div>
                </>
        );
    }
} 
    

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
