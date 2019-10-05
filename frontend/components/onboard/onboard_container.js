import React from 'react';
import { connect } from 'react-redux';
import Onboard from './onboard';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboard);
