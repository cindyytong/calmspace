import React from 'react';
import { connect } from 'react-redux';
import MessageForm from './message_form';
import { getUserChatRoom, createChatRoom } from '../../actions/chat_room_actions';
import { fetchTherapist } from '../../actions/therapist_actions';

const mapStateToProps = state => {
    return {
        user: state.entities.users,
        chatrooms: state.entitites.chatrooms,
        messages: state.entities.messages,
        errors: state.errors.session
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        createChatRoom: (chatRoom) => dispatch(createChatRoom(chatRoom)),
        getUserChatRoom: (userId) => dispatch(getUserChatRoom(userId)),
        fetchTherapist: (id) => dispatch(fetchTherapist)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
