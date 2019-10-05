import React from 'react';
import { connect } from 'react-redux';
import Onboard from './onboard';
import { Link } from 'react-router-dom';
import { fetchTopics } from '../../actions/topic_actions'
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = state => {

    return {
        user: Object.values(state.entities.users)[0], // user object 
        errors: state.errors.session,
        topics: Object.values(state.entities.topics)
    }
};

const mapDispatchToProps = dispatch => {
    debugger
    return {
        clearErrors: () => dispatch(clearErrors()),
        fetchTopics: () => dispatch(fetchTopics()),
        updateUser: (user) => dispatch(updateUser(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboard);
