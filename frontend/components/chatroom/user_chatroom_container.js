import React from 'react';
import { connect } from 'react-redux';
import ChatRoom from './chatroom';

const mapStateToProps = state => {
    return {
        user: Object.values(state.entities.users)[0], 
        errors: state.errors.session
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
