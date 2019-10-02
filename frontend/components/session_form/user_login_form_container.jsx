import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
// import { login } from '../../actions/user_session_actions';
import SessionForm from './session_form';

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);