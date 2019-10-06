import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Match extends React.Component {
    
    constructor(props, ownProps){
        super(props);
        this.state = this.props.user;
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
 

    // handleClick(field) {
      
    //     return(e) => {
    //         this.setState({
    //             [field]: e.target.checked
    //         })
    //     }
    // }

    // handleSubmit(e){
    //     e.preventDefault();
    //     this.props.updateUser(this.state)
    //         .then(() => this.props.history.push(`auth/user/{user.id}/matches`))
    // }

    selectTherapist(e){
        console.log("therapist is selected")
        // on button click assign therapist to user, user to therapist 
        // route to chatroom 
    }

    render(){
        const therapists = Object.values(this.props.matches).map(therapist => {
            return (
                <div className="therapist-container" key={therapist.id}>
                    <div className="therapist-left">
                        <img src={therapist.img_url} className="therapist-pic"/>
                        <Link to={`/auth/user/chatroom`}
                            className="select-therapist"
                            onClick={this.selectTherapist}>Select
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
                                    <li>{topic.title}</li>
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