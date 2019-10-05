import React from 'react';
import { withRouter } from 'react-router-dom';
import TopicItem from './topic_item';

class Onboard extends React.Component {
    componentDidMount(){
        debugger
        this.props.fetchTopics();
    }

    constructor(props){
        debugger
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.state = this.props.user 
    }

    // selectGender(field){
    //     return (e) => {
    //         this.setState({
    //             [field]: e.target.value
    //         });
    //     };
    // }

    // selectTopics(field){

    // }

    // handleSubmit(e){
    //     e.preventDefault();
    //     this.props.action(this.state).then(() => this.props.history.push('/auth/user/chatroom'))
    // }

    render(){
        const topics = this.props.topics
        debugger
        return(
        <div className="onboard-page-container">
            <h2>Onboard</h2>
            <p>Calmspace will connect you with a licensed therapist, who you can message from anywhere at any time.</p>
            <p>First, let’s get started by answering a few questions so we can help find the best matches for you.</p>
            <form>
                <div className="question-container">
                    <h4 className="question">What led you to seek help today?</h4>
                    <textarea name="answer" id="answer-why" cols="30" rows="15"></textarea>
                </div>
                <div className="question-container">
                    <h4 className="question">Do you have a gender preference for your therapist</h4>
                    <div className="gender-pref-radio">
                        <input type="radio" value="female" name="genderPref" id="female"/>
                        <label>Female</label>
                        <input type="radio" value="male" name="genderPref" id="male"/>
                        <label>Male</label>
                        <input type="radio" value="none" name="genderPref" id="none"/>
                        <label>No preference</label>
                    </div>
                </div>
                <div className="question-container">
                    <h4 className="question">Select all topics you would like to explore</h4>
                    <TopicItem topic={"test topic"}/>
                </div>
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