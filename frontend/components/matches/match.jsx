import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Match extends React.Component {
    // componentDidMount(){
       
    // }

    constructor(props){
        super(props);
       
        this.state = this.props.user 
        debugger
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
        return(
            <div className="matches-container">
                <h4>Meet your matches</h4>
                <p>Based on your criteria, these are the best matches for you</p>
                <div className="therapist-match-container">
                    <div className="therapist-left">
                        <img src={window.therapist1URL} className="therapist-match-pic"/>
                        <Link to={`/auth/user/${this.state.id}/chatroom`}
                            className="select-therapist"
                            onClick={this.selectTherapist}> Select
                        </Link>
                    </div>
                    <div className="therapist-right">
                        <h5>Profile</h5>
                        <h4>Therapist Name</h4>
                        <p className="degree">Degree</p>
                        <p>bio goes heszdnlsndskldnladknlsndklndlnaldnklanskldnklnklasnldnlkre</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default withRouter(Match);