import React from 'react';
import { connect } from 'react-redux';
import Match from './match';
import { Link } from 'react-router-dom';
import { updateUser, fetchMatches } from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        user: Object.values(state.entities.users)[0], // user object 
        errors: state.errors.session,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        updateUser: (user) => dispatch(updateUser(user)),
        fetchMatches: (user) => dispatch(fetchMatches(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Match);
