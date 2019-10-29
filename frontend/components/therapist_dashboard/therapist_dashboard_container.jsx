import React from 'react';
import { connect } from 'react-redux';
import TherapistDashboard from './therapist_dashboard';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ( state ) => {
    return {
        therapist: Object.values(state.entities.therapist)[0],
        users: state.entities.users, 
        chatrooms: Object.values(state.entities.chatrooms),
        notes: Object.values(state.entities.notes)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TherapistDashboard));
