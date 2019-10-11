import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageForm from './message_form';
import { getUserChatRoom, createChatRoom } from '../../actions/chat_room_actions';
import { fetchTherapist } from '../../actions/therapist_actions';
import { getChatRoomMessages, createMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        user: Object.values(state.entities.users)[0],
        // chatrooms: Object.values(state.entities.chatrooms) || [],
        chatroom: state.entities.chatrooms[ownProps.match.params.chatRoomId], 
        errors: state.errors.session
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        getChatRoomMessages: (chatRoomId) => dispatch(getChatRoomMessages(chatRoomId)),
        createMessage: (message) => dispatch(createMessage(message))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));
