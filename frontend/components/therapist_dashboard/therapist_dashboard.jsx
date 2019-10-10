import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthNavContainer from '../navigation/auth_nav_container';

class TherapistDashboard extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const chatRoomIds = this.props.user.chat_rooms.map( chatRoom => chatRoom.id);
        chatRoomIds.forEach( chatRoomId => this.props.getUserChatRoom(chatRoomId));
    }

    render(){
        const chatRooms = this.props.chatrooms.map(chatroom => {
            return (
                <div className="patient-container">
                    <div className="patient-info">
                        <h6 className="patient-header">Username:</h6>
                        <p className="patient-desc">{chatroom.user.username}</p>
                        <h6 className="patient-header">Member since:</h6>
                        <p className="patient-desc">{chatroom.user.created_at.split("T")[0]}</p>
                        <h6 className="patient-header">Therapy Goals:</h6>
                        <p className="patient-desc">{chatroom.user.goals}</p>
                        <h6 className="patient-header">Number of Messages Exchanged</h6>
                        <p className="patient-desc">{chatroom.messages.length}</p>
                    </div>
                    <div className="button-chat-row">
                        <button className="dashboard-link" value={chatroom.id}>Go to Chat</button>
                        <button className="dashboard-link" value={chatroom.note.id}>View Notes</button>
                    </div>
                </div>
            )
        })
        return (
            <>
            <AuthNavContainer />
            <div className="therapist-dashboard-container">
                <h5 className="therapist-dashboard-header">Your Patients</h5>
                {chatRooms}
            </div>
            </>
        )
    }
};

export default withRouter(TherapistDashboard);