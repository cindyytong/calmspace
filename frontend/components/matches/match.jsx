import React from 'react';
import { withRouter } from 'react-router-dom';


class Match extends React.Component {
    // componentDidMount(){
       
    // }

    // constructor(props){
    //     super(props);
       
    //     this.state = this.props.user 
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

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

    render(){
        return(
            <div className="matches-container">
                <h4>Meet your matches</h4>
                <p>Based on your criteria, these are the best matches for you</p>
            </div>
        )
    }
};

export default withRouter(Match);