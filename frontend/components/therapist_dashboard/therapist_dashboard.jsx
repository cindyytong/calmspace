import React from 'react';
import AuthNavContainer from '../navigation/auth_nav_container';

class TherapistDashboard extends React.Component {
    constructor(props){   
        super(props);
        this.linkToChatRoom = this.linkToChatRoom.bind(this);
        this.linkToNote = this.linkToNote.bind(this);
        this.linkToNewNote = this.linkToNewNote.bind(this);
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
        const users = this.props.users; 
        let noPatientMessage;

        if (Object.keys(users).length === 0){
            noPatientMessage = (
                <p>You do not have any current patients</p>
            )
        };

        const notes = this.props.notes;
        const chatRooms = this.props.chatrooms.map(chatroom => {
    
            let noteObj = notes.filter(function(note){
                return note.chat_room_id === chatroom.id
            })[0]
            let noteLink;
    
            if(!noteObj){
                noteLink = <button className="dashboard-link" onClick={this.linkToNewNote}>Create Note</button>   
            } else {
        
                noteLink = <button className="dashboard-link" value={chatroom.note_id} onClick={this.linkToNote}>View Note</button>;
            }
            let chatPatient = users[chatroom.user_id];

            return (
                <div className="patient-container" key={chatroom.id}>
                    <div className="patient-info">
                        <h6 className="patient-header">Username:</h6>
                        <p className="patient-desc">{chatPatient.username}</p>
                        <h6 className="patient-header">Member since:</h6>
                        <p className="patient-desc">{chatPatient.created_at.split("T")[0]}</p>
                        <h6 className="patient-header">Therapy Goals:</h6>
                        <p className="patient-desc">{chatPatient.goals}</p>
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
                {noPatientMessage}
                {chatRooms}
            </div>
            </>
        )
    }
};

export default TherapistDashboard;