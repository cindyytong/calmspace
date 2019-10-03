import React from 'react';
import { connect } from 'react-redux';
import AuthNavBar from './authnavbar';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    debugger
    if (!state.session.id){
        return { currentUser: null }
    } else {
        return { currentUser: state.entities.user[state.session.id] }
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthNavBar)