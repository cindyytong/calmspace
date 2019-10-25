import React from 'react';
import { connect } from 'react-redux';
import DemoTherapist from './demo_therapist';
import { login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    const demoTherapists = [
        { username: 'therapist1', email: 'therapist1@calmspace.com', password: '12345678', first_name: 'Sarah', image: window.therapist1URL},
        { username: 'therapist2', email: 'therapist2@calmspace.com', password: '12345678', first_name: 'Rebecca', image: window.therapist2URL},
        { username: 'therapist3', email: 'therapist3@calmspace.com', password: '12345678', first_name: 'Chloe', image: window.therapist3URL},
        { username: 'therapist4', email: 'therapist4@calmspace.com', password: '12345678', first_name: 'Jason', image: window.therapist4URL},
        { username: 'therapist5', email: 'therapist5@calmspace.com', password: '12345678', first_name: 'Michael', image: window.therapist5URL},
        { username: 'therapist6', email: 'therapist6@calmspace.com', password: '12345678', first_name: 'Andrew', image: window.therapist6URL}
    ];
    return {
        demoTherapists: demoTherapists
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (therapist, type) => dispatch(login(therapist, 'therapist')),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DemoTherapist));
