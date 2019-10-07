import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Match extends React.Component {
    
    constructor(props, ownProps){
        super(props);
        this.state = props.user;
        this.selectTherapist = this.selectTherapist.bind(this);
        this.updateCurrentTherapist = this.updateCurrentTherapist.bind(this);
    }
 
    componentDidMount(){
        this.props.fetchMatches();
    }

    // handleClick(field) {
    //     return(e) => {
    //         debugger
    //         this.setState({
    //             [field]: e.target.value
    //         })
    //     }
    // }

    // handleSubmit(e){
    //     e.preventDefault();
    //     this.props.updateUser(this.state)
    //         .then(() => this.props.history.push(`auth/user/{user.id}/matches`))
    // }

    updateCurrentTherapist(e) {
        debugger
        const user = this.state;
        const currentState = user;
        currentState['current_therapist_id'] = e.target.value;
        debugger
        this.setState({ user: currentState })
      }

    selectTherapist(){
        debugger
        this.updateCurrentTherapist();
        debugger
        this.props.updateUser(this.state)
            .then(() => this.props.history.push(`/auth/user/${this.state.id}/chatroom`))
    }

    render(){
        // debugger
        const therapists = Object.values(this.props.matches).map(therapist => {
            return (
                <div className="therapist-container" key={therapist.id}>
                    <div className="therapist-left">
                        <img className="2-pic" src={eval(`window.${therapist.img_url}`)} className="therapist-pic"/>
                    
                        <Link to='/auth/user/chatroom' onClick={this.selectTherapist} value={therapist.id} className="select-therapist">
                            Select
                        </Link>
                    </div>
                    <div className="therapist-right">
                        <div className="profile-col-1">
                            <h5>Profile</h5>
                            <h4>{therapist.first_name} {therapist.last_name}</h4>
                            <p className="degree">{therapist.degree}</p>
                            <p>{therapist.body}</p>
                        </div>
                        <div className="profile-col-2">
                            <p>License and State</p>
                            <p>{therapist.degree}, NY</p>
                            <ul>Specialties</ul>
                            {Object.values(therapist.topics).map(topic => {
                                return (
                                    <li key={`topic-${topic.id}-${therapist.first_name}`}>{topic.title}</li>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
        })

        return(
            <div className="matches-page-container">
                <h4>Meet your matches</h4>
                <p>Based on your criteria, these are the best matches for you</p>
                <div className="matches-container">
                    {therapists}
                </div>
            </div>
        )
    }
};

export default withRouter(Match);