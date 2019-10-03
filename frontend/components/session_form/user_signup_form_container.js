import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    const user = { username: '', email: '', password: '', over_age_13: false };
    const formType = 'Sign Up';
    const errors = state.errors.session;
    const navLink = <Link to="/user/login">Log In</Link>

    return {
        user,
        formType,
        errors,
        navLink
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user, 'user')),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
