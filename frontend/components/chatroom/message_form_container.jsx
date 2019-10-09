import React from 'react';
import { connect } from 'react-redux';
import MessageForm from './message_form';
import { getUserChatRoom, createChatRoom } from '../../actions/chat_room_actions';
import { fetchTherapist } from '../../actions/therapist_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: Object.values(state.entities.users)[0],
        chatrooms: Object.values(state.entities.chatrooms) || [],
        errors: state.errors.session
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
