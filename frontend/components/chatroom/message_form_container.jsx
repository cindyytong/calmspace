import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageForm from './message_form';
import { getChatRoomMessages, createMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.currentUserId],
        chatroom: state.entities.chatrooms[ownProps.match.params.chatRoomId], 
        session: state.session
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getChatRoomMessages: (chatRoomId) => dispatch(getChatRoomMessages(chatRoomId)),
        createMessage: (message) => dispatch(createMessage(message))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));
