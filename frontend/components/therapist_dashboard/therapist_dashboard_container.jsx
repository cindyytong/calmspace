import React from 'react';
import { connect } from 'react-redux';
import TherapistDashboard from './therapist_dashboard';
import { getUserChatRoom } from '../../actions/chat_room_actions'
import { withRouter } from 'react-router-dom';
import { getNote, createNote } from '../../actions/note_actions';

const mapStateToProps = ( state, ownProps ) => {
    return {
        therapist: Object.values(state.entities.therapist)[0],
        users: state.entities.users, 
        chatrooms: Object.values(state.entities.chatrooms)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        getUserChatRoom: (chatRoomId) => dispatch(getUserChatRoom(chatRoomId)),
        getNote: (noteId) => dispatch(getNote(noteId)),
        createNote: (note) => dispatch(createNote(note))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TherapistDashboard));
