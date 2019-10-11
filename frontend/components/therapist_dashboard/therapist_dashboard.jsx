import React from 'react';
import AuthNavContainer from '../navigation/auth_nav_container';

class TherapistDashboard extends React.Component {
    constructor(props){    
        super(props);
        this.linkToChatRoom = this.linkToChatRoom.bind(this);
        this.linkToNote = this.linkToNote.bind(this);
        this.linkToNewNote = this.linkToNewNote.bind(this);
    }

    componentDidMount(){
        const chatRoomIds = this.props.user.chat_rooms.map( chatRoom => chatRoom.id);
        chatRoomIds.forEach( chatRoomId => this.props.getUserChatRoom(chatRoomId));
    }

    linkToChatRoom(e){
        e.preventDefault();
        let chatRoomId = e.target.value;
        this.props.history.push(`/auth/therapist/chatroom/${chatRoomId}`);
    }

    linkToNote(e){
        e.preventDefault();
        let noteId = e.target.value;
        this.props.history.push(`/auth/therapist/note/${noteId}`);
    }

    linkToNewNote(e){
        e.preventDefault();
        this.props.history.push('/auth/therapist/note/new');
    }

    render(){
        const chatRooms = this.props.chatrooms.map(chatroom => {
            let noteLink;
            if(chatroom.note){
                noteLink = <button className="dashboard-link" value={chatroom.note.id} onClick={this.linkToNote}>View Note</button>;
            } else {
                noteLink = <button className="dashboard-link" onClick={this.linkToNewNote}>Create Note</button>
            }
            return (
                <div className="patient-container" key={chatroom.id}>
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
                        <button className="dashboard-link" value={chatroom.id} onClick={this.linkToChatRoom}>Go to Chat</button>
                        {noteLink}
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

export default TherapistDashboard;