import React from 'react';
import { connect } from 'react-redux';
import Onboard from './onboard';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { fetchTopics } from '../../actions/topic_actions'

const mapStateToProps = state => {
    debugger
    return {
        errors: state.errors.session,
        posts: Object.keys(state.topics).map(id => state.topics[id])
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        fetchTopics: () => dispatch(fetchTopics())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboard);
