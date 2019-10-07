import React from 'react';
import { connect } from 'react-redux';
import DemoTherapist from './demo_therapist';
import { login } from '../../actions/session_actions';


const mapStateToProps = state => {
    const demoTherapists = [
        { id: 1, email: 'therapist1@calmspace.com', password: '12345678', first_name: 'Sarah', image: window.therapist1URL},
        { id: 2, email: 'therapist2@calmspace.com', password: '12345678', first_name: 'Rebecca', image: window.therapist2URL},
        { id: 3, email: 'therapist3@calmspace.com', password: '12345678', first_name: 'Chloe', image: window.therapist3URL},
        { id: 4, email: 'therapist4@calmspace.com', password: '12345678', first_name: 'Jason', image: window.therapist4URL},
        { id: 5, email: 'therapist5@calmspace.com', password: '12345678', first_name: 'Michael', image: window.therapist5URL},
        { id: 6, email: 'therapist6@calmspace.com', password: '12345678', first_name: 'Andrew', image: window.therapist6URL}
    ];
    return {
        demoTherapists: demoTherapists
    }
};

const mapDispatchToProps = dispatch => {
    debugger
    return {
        login: (therapist) => dispatch(login(therapist, 'therapist')),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoTherapist);
