import React from 'react';
import { connect } from 'react-redux';
import { fetchTherapist } from './../../../actions/therapist_actions';

const mapStateToProps = state => {

    return {
        user: Object.values(state.entities.users)[0], 
        errors: state.errors.session,
        therapist: state.entities.therapist
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTherapist: (therapistId) => dispatch(fetchTherapist(therapistId))
    }
};

class TherapistProfile extends React.Component{

    componentDidMount(){
        this.props.fetchTherapist(this.props.user.current_therapist_id);
    }

    render(){
        const therapist = Object.values(this.props.therapist).map(therapist => {
            return (
                <div key={therapist.id}> 
                    <img src={eval(`window.${therapist.img_url}`)} className="therapist-pro-pic"/>
                    <h4 className="therapist-name-pro">{therapist.first_name} {therapist.last_name}</h4>
                    <div className="degree-info">
                            <img src={window.degreeIconURL} className="degree-icon"/>
                            <p>License and State </p>
                            <p>{therapist.degree}, NY</p>
                    </div>
                    <p className="bio">{therapist.body}</p>
                        <div className="focus-list">
                            <ul className='focus-heading'>Focus
                                {Object.values(therapist.topics).map(topic => {
                                    return (
                                        <div className="match-topic-row" key={`topic-${topic.id}-${therapist.first_name}`}>
                                            <img className="check-bullet" src={window.checkIconURL} />
                                            <li className="topic-item" >{topic.title}</li>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                </div>
            )
        });

        return (
            <div className="therapist-profile-container">
                <h4 className="about-therapist-headline">About Your Therapist</h4>
                    {therapist}
            </div>
        )
    }
} 
    

export default connect(mapStateToProps, mapDispatchToProps)(TherapistProfile);
