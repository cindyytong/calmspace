import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    debugger
    return {
        formType: 'Sign Up',
        errors: state.errors.session,
        navLink: <Link to="/user/login">Log In</Link>,
        demoLink: <button>Demo User</button>
    }
};

const mapDispatchToProps = dispatch => {
    debugger
    return {
        processForm: (user) => dispatch(signup(user, 'user'))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
