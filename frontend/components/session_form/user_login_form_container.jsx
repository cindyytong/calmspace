import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        formType: 'Log In',
        errors: state.errors.session,
        navLink: <Link to="/signup">Sign Up</Link>,
        demoLink: <button>Demo User</button>
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user, 'user')),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
