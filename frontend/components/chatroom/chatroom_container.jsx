import React from 'react';
import { connect } from 'react-redux';
import ChatRoom from './chatroom';
import { getUserChatRoom } from '../../actions/chat_room_actions';
import { getChatRoomMessages, receiveMessage } from '../../actions/message_actions';
import { clearErrors } from '../../actions/session_actions'

const mapStateToProps = ( state, ownProps ) => {
    debugger
    return {
        user: Object.values(state.entities.users)[0],
        chatrooms: Object.values(state.entities.chatrooms),
        messages: Object.values(state.entities.messages),
        errors: state.errors.session
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        getUserChatRoom: (chatRoomId) => dispatch(getUserChatRoom(chatRoomId)),
        getChatRoomMessages: (chatRoomId) => dispatch(getChatRoomMessages(chatRoomId)),
        receiveMessage: (message) => dispatch(receiveMessage(message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
