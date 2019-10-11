import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthNavContainer from '../navigation/auth_nav_container'


class Match extends React.Component {
    
    constructor(props, ownProps){
        super(props);
        this.state = props.user;
    }
 
    componentDidMount(){
        this.props.fetchMatches();
    }


    selectTherapist(therapistId){
        return(e) => {
            e.preventDefault();
            // this.props.updateUser({
            //     current_therapist_id: therapistId,
            //     id: this.state.id})
            // .then(() => this.props.history.push(`/auth/user/${this.state.id}/chatroom`))
            this.props.updateUser({
                current_therapist_id: therapistId,
                id: this.state.id})
            .then(() => this.props.createChatRoom())
            .then(() => this.props.history.push(`/auth/user/chatroom/${this.props.chatroom.id}`))
        }
    }

    render(){
        const therapists = Object.values(this.props.matches).map(therapist => {
            return (
                <>
                <AuthNavContainer />
                <div className="therapist-container" key={therapist.id}>
                    <div className="therapist-left">
                        <img src={eval(`window.${therapist.img_url}`)} className="therapist-pic"/>
                        
                    
                        <button onClick={this.selectTherapist(therapist.id)} className="select-therapist">
                            Select
                        </button>
                    </div>
                    <div className="therapist-right">
                        <div className="profile-col-1">
                            <h5 className="profile-title">Profile</h5>
                            <h4 className="therapist-name">{therapist.first_name} {therapist.last_name}</h4>
                            <div className="degree-info">
                                <img src={window.degreeIconURL} className="degree-icon"/>
                                    <p>License and State </p>
                                    <p>{therapist.degree}, NY</p>
                            </div>
                            <p className="bio">{therapist.body}</p>
                        </div>
                        <div className="profile-col-2">
    
                            <div className="focus-list">
                                <ul>Focus
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
                    </div>
                </div>
                </>
            );
        })

        return(
            <div className="matches-page-container">
                <h4 className="match-header">Meet your matches</h4>
                <p className="match-subheading">Based on your criteria, these are the best matches for you</p>
                    {therapists}
            </div>
        )
    }
};

export default withRouter(Match);