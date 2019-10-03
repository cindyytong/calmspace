import React from 'react';
import { connect } from 'react-redux';
// import DemoTherapist from './demo-therapist';
import { login, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const DemoTherapist = () => {
    return (
        <h1>User chatroom</h1>
    )
};

export default DemoTherapistContainer;


// const mapStateToProps = state => {
//     return {
//         errors: state.errors.session,
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         processForm: (therapist) => dispatch(login(therapist, 'therapist'))
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(DemoTherapist);
