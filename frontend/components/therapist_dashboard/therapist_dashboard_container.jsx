import React from 'react';
import { connect } from 'react-redux';
import TherapistDashboard from './therapist_dashboard';
import { getUserChatRoom } from '../../actions/chat_room_actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = ( state, ownProps ) => {
    return {
        user: Object.values(state.entities.users)[0],
        chatrooms: Object.values(state.entities.chatrooms)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        getUserChatRoom: (chatRoomId) => dispatch(getUserChatRoom(chatRoomId))
        
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TherapistDashboard));
