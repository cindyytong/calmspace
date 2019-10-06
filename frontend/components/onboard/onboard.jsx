import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';



class Onboard extends React.Component {
    componentDidMount(){
        this.props.fetchTopics();
    }

    constructor(props){
        super(props);
        let user = this.props.user; 
        
        this.state = {
            new_user: {
                id: user.id,
                current_therpist_id: user.current_therpist_id,
                gender_pref: user.gender_pref,
                goals: user.goals
            },
         
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
        debugger
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
        debugger
    }

    handleSubmit(e){
        e.preventDefault();
        debugger
        this.props.updateUser(this.state.new_user)
            .then(() => this.props.history.push(`auth/user/{new_user.id}/matches`))
    }

    render(){
        // map topics into list 
        const topics = this.props.topics.map( topic => {
            return (
            <div className="topic-row" key={topic.id}>
                <input type="checkbox" 
                    name={topic.title}
                    checked={this.state.selections[topic.title]}
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
        <div className="onboard-page-container">
            <h2>Onboard</h2>
            <p>Calmspace will connect you with a licensed therapist, who you can message from anywhere at any time.</p>
            <p>First, let’s get started by answering a few questions so we can help find the best matches for you.</p>
            
            <form onSubmit={this.handleSubmit}>
                <div className="question-container">
                    <h4 className="question">What led you to seek help today?</h4>
                    <textarea  name="answer" value={this.state.new_user.goals} onChange={this.update('goals')} id="answer-why" cols="30" rows="15"></textarea>
                </div>
                <div className="question-container">
                    <h4 className="question">Do you have a gender preference for your therapist</h4>
                    <div className="gender-pref-radio">
                    <select onChange={this.update('gender_pref')}>
                        <option value="none">No prefeence</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
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