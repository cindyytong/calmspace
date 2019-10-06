import React from 'react';
import { connect } from 'react-redux';
import Onboard from './onboard';
import { Link } from 'react-router-dom';
import { fetchTopics } from '../../actions/topic_actions'
import { updateUser, fetchMatches } from '../../actions/user_actions';
import { createTopicInterest } from '../../actions/topic_interest_actions';

const mapStateToProps = state => {

    return {
        user: Object.values(state.entities.users)[0], // user object 
        errors: state.errors.session,
        topics: Object.values(state.entities.topics)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        fetchTopics: () => dispatch(fetchTopics()),
        updateUser: (user) => dispatch(updateUser(user)),
        createTopicInterest: (userId, topicId) => dispatch(createTopicInterest(userId, topicId)),
        fetchMatches: () => dispatch(fetchMatches()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboard);
