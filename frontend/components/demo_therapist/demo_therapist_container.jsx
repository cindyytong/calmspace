import React from 'react';
import { connect } from 'react-redux';
import DemoTherapist from './demo_therapist';
import { login, logout } from '../../actions/session_actions';
import { getTherapists } from '../../actions/therapist_actions';


const mapStateToProps = state => {
    const demoTherapists = [
        { email: 'therapist1@calmspace.com', password: '12345678', first_name: 'Sarah'},
        { email: 'therapist2@calmspace.com', password: '12345678', first_name: 'Rebecca'},
        { email: 'therapist3@calmspace.com', password: '12345678', first_name: 'Chloe'},
        { email: 'therapist4@calmspace.com', password: '12345678', first_name: 'Jason'},
        { email: 'therapist5@calmspace.com', password: '12345678', first_name: 'Michael'},
        { email: 'therapist6@calmspace.com', password: '12345678', first_name: 'Andrew'}
    ];
    return {
        demoTherapists: demoTherapists
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (therapist) => dispatch(login(therapist, 'therapist')),
        logout: () => dispatch(logout()),
        getTherapists: () => dispatch(getTherapists())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoTherapist);
