import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import AuthNavContainer from '../navigation/auth_nav_container'


class Onboard extends React.Component {
    componentDidMount(){
        this.props.fetchTopics();
    }

    constructor(props){
        super(props);
        let user = this.props.user; 
        let topics = this.props.topics;
        this.state = {
            new_user: {
                id: user.id,
                current_therpist_id: '',
                gender_pref: 'none',
                goals: ''
            },
            topics,
            selections: {
                'ADHD': false,
                'Anger Management': false,
                'Anxiety': false,
                'Behavioral Issues': false,
                'Career Counseling': false,
                'Child or Adolescent': false,
                'Coping Skills': false,
                'Codependency': false,
                'Cognitive Behavioral': false,
                'Divorce': false,
                'Depression': false,
                'Family Conflict': false,
                'Life Coaching': false,
                'Life Transition': false,
                'Learning Disability': false,
                'Positive Psychology': false,
                'Pregnancy Postpartem': false,
                'Relationship Issues': false,
                'Self Esteem': false,
                'Stress': false  
            }
        }
        this.createSelectedTopic = this.createSelectedTopics.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            const new_user = this.state.new_user;
            const currentState = new_user;
            currentState[field] = e.target.value;
            this.setState({ new_user: currentState })
        }
      }

    selectTopic(field) {
        return (e) => {
            const selections = this.state.selections;
            const currentState = selections;
            currentState[field] = e.target.checked;
            this.setState({ selections: currentState })
        }
    }

    createSelectedTopics(){
        // make an array of selected titles only 
        let topics = this.state.selections;
        var selectedTopics = [];
        for (let title in topics ){
            if(topics[title] === true ){
                selectedTopics.push(title)
            }
        }
        // convert all topics to an array of objects to get id 
        const topicArr = Object.values(this.props.topics)

        // for each title, invoke createTopicInterest 
        selectedTopics.forEach(topic => {
            let topicId = topicArr.find(o => o.title === topic).id;
            this.props.createTopicInterest(this.state.new_user.id, topicId);
        })
    }

    handleSubmit(e){
  
        e.preventDefault();
        this.createSelectedTopics(); // make topic_interest entries 
        // this.props.fetchMatches();  // update state with matches 
        this.props.updateUser(this.state.new_user) // update user pref
            .then(() => this.props.history.push(`/auth/user/${this.state.new_user.id}/matches`))
    }


    render(){
        // map topics into list 
        const topics = this.props.topics.map( topic => {
            return (
            <div className="topic-row" key={topic.id}>
                <input type="checkbox" 
                    name={topic.title}
                    // checked={this.state.selections[topic.title]}
                    onClick={this.selectTopic(topic.title)}
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
        <>
        <AuthNavContainer /> 
        <div className="onboard-page-container">
            <div className="onboard-header">
                <h2 className="onboard-headline">Get Matched</h2>
                <p className="onboard-description">Calmspace will connect you with a licensed therapist, who you can message from anywhere at any time.</p>
                <p className="onboard-description">First, let’s get started by answering a few questions so we can help find the best matches for you.</p>
            </div>
            <div className="onboard-content">
            <form onSubmit={this.handleSubmit}>
                <div className="question-container">
                    <label className="question" htmlFor="question-goal">
                        What led you to seek help today?</label>
                        <textarea className="goal-textarea" name="question-goal" value={this.state.new_user.goals} onChange={this.update('goals')} cols="20" rows="5"></textarea>
                </div>
                <div className="question-container">
                    <label className="question" htmlFor="gender-pref">Do you have a gender preference for your therapist</label>
                        <div className="custom-select">
                        <select className="select-gender" onChange={this.update('gender_pref')}>
                            <option className="dropdown-option" value="none">No preference</option>
                            <option className="dropdown-option" value="female">Female</option>
                            <option className="dropdown-option" value="male">Male</option>
                        </select>
                        </div>     
                </div>
                <div className="question-container">
                    <label className="question" htmlFor="topics">
                        Select all topics you would like to explore</label>
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
        </div>
        </>
        )
    }
};

export default withRouter(Onboard);
