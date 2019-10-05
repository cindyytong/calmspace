import React from 'react';
import { connect } from 'react-redux';
import Signup from './signup';
import { signup, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    const user = { username: '', email: '', password: '', over_age_13: false };
    const formType = 'Sign Up';
    const errors = state.errors.session;
    const session = state.session;
    const navLink = <Link to="/user/login">Log In</Link>
    return {
        user,
        formType,
        errors,
        session,
        navLink
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
