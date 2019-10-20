import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { getChatRoomId } from '../../actions/chat_room_actions'; 
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    const defaultUser = { email: '', password: '' };
    const formType = 'Log In';
    const errors = state.errors.session;
    const navLink = <Link to="/signup">Sign Up</Link>;
    return {
        user: defaultUser,
        formType,
        errors,
        navLink 
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user, 'user')),
        clearErrors: () => dispatch(clearErrors()),
        getChatRoomId: (userId) => getChatRoomId(userId)
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
