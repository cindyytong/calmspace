import React from 'react';
import { withRouter } from 'react-router-dom';


class Onboard extends React.Component {
    componentDidMount(){
        this.props.fetchTopics();
    }

    constructor(props){
        super(props);
        let user = this.props.user; 
        this.state = {
            id: user.id,
            current_therpist_id: user.current_therpist_id,
            gender_pref: user.gender_pref,
            topics: user.topics,
            goals: user.goals 
            }
        debugger 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(field) {
        return(e) => {
            this.setState({
                [field]: e.target.checked
            })
        }
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
      }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateUser(this.state)
            .then(() => this.props.history.push(`auth/user/{user.id}/matches`))
    }

    render(){
        // map topics into list 
        const topics = this.props.topics.map( topic => {
            return (
            <div className="topic-row" key={topic.id}>
                <input type="checkbox" 
                    name="topic-preference"
                    // checked={this.state.topics}
                    onClick={this.handleClick('topics')}
                    className="check-topic"
                />
                <label className="topic-label">{topic.title}</label>
            </div>)
        });

        // check for errors
        let displayError;
        if (this.props.errors.length > 0){
            displayError = this.props.errors[0];
        }

        return(
        <div className="onboard-page-container">
            <h2>Onboard</h2>
            <p>Calmspace will connect you with a licensed therapist, who you can message from anywhere at any time.</p>
            <p>First, let’s get started by answering a few questions so we can help find the best matches for you.</p>
            <form onSubmit={this.handleSubmit}>
                <div className="question-container">
                    <h4 className="question">What led you to seek help today?</h4>
                    <textarea  name="answer" value={this.state.goals} onChange={this.update('goals')} id="answer-why" cols="30" rows="15"></textarea>
                </div>
                <div className="question-container">
                    <h4 className="question">Do you have a gender preference for your therapist</h4>
                    <div className="gender-pref-radio">
                        <input type="radio" onClick={this.handleClick('gender_pref')} value="female" name="genderPref" id="female"/>
                        <label>Female</label>
                        <input type="radio" onClick={this.handleClick('gender_pref')} value="male" name="genderPref" id="male"/>
                        <label>Male</label>
                        <input type="radio" onClick={this.handleClick('gender_pref')} value="none" name="genderPref" id="none"/>
                        <label>No preference</label>
                    </div>
                </div>
                <div className="question-container">
                    <h4 className="question">Select all topics you would like to explore</h4>
                    <div className="topics-container">
                        {topics}
                    </div>
                </div>
                <div className="error">{displayError}</div>
                <div className="button-row">
                    <input 
                        className="session-submit white green-fill"
                        type="submit" 
                        value="Get Matched"/>
                </div>
            </form>
        </div>
        )
    }
};

export default withRouter(Onboard);