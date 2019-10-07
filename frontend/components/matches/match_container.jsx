import React from 'react';
import { connect } from 'react-redux';
import Match from './match';
// import { Link } from 'react-router-dom';
import { updateUser, fetchMatches } from '../../actions/user_actions';
// import { fetchTherapist } from '../../actions/therapist_actions';

const mapStateToProps = state => {
    return {
        user: Object.values(state.entities.users)[0], 
        errors: state.errors.session,
        matches: state.entities.matches
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        updateUser: (user) => dispatch(updateUser(user)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Match);
