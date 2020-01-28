import React from 'react';
import { connect } from 'react-redux';
import { fetchTherapist } from './../../../actions/therapist_actions';

const mapStateToProps = state => {
    const user = state.entities.users[state.session.currentUserId];
    return {
        user: user,  
        errors: state.errors.session,
        therapist: state.entities.therapists[user.current_therapist_id]
    }
};

class TherapistProfile extends React.Component{
    render(){
        const therapist = this.props.therapist;
        const topicList = therapist.topics.map(topic => {
            return (
                <div className="match-topic-row" key={`${topic}`}>
                    <img className="check-bullet" src={window.checkIconURL} />
                    <li className="topic-item" >{topic}</li>
                </div>
            );
        });

        return (
            <div className="therapist-profile-container">
                <h4 className="about-therapist-headline">About Your Therapist</h4>
                <div key={therapist.id} className="therapist-info-container"> 
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
                                {topicList}
                            </ul>
                        </div>
                </div>
            </div>
        )
    }
} 
    

export default connect(mapStateToProps)(TherapistProfile);
