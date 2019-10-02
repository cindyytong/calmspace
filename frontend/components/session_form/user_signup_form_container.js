import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        formType: 'Log In',
        errors: state.errors.session,
        navLink: <Link to="/user/login">Log In</Link>,
        demoLink: <button>Demo User</button>
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
