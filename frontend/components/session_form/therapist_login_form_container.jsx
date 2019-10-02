import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        formType: 'Log In',
        errors: state.errors.session,
        demoLink: <button>Demo Therapist</button>
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (therapist) => dispatch(login(therapist, 'therapist'))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);


