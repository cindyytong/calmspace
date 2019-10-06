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
        let topics = this.props.topics;
        this.state = {
            new_user: {
                id: user.id,
                current_therpist_id: user.current_therpist_id,
                gender_pref: user.gender_pref,
                goals: user.goals
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
        this.createSelectedTopics();
        this.props.updateUser(this.state.new_user)
            .then(() => this.props.history.push(`auth/user/matches`))
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



// // filters out true and returns [ 'ADHD', 'Anger Management' ]
// let selection = {
//     'ADHD': true,
//     'Anger Management': true,
//     'Anxiety': false,
//     'Behavioral Issues': false,
//     'Career Counseling': false,
//     'Child or Adolescent': false,
//     'Coping Skills': false,
//     'Codependency': false,
//     'Cognitive Behavioral': false,
//     'Divorce': false,
//     'Depression': false,
//     'Family Conflict': false,
//     'Life Coaching': false,
//     'Life Transition': false,
//     'Learning Disability': false,
//     'Positive Psychology': false,
//     'Pregnancy Postpartem': false,
//     'Relationship Issues': false,
//     'Self Esteem': false,
//     'Stress': false  
// };

// let keys = Object.keys(selection);
// let filtered = keys.filter(function(key){
//     if(selection[key] === true){
//         return key
//     }
// }); 




// topics = {
// 5: {id: 5, title: "ADHD"}
// 6: {id: 6, title: "Anger Management"}
// 7: {id: 7, title: "Anxiety"}
// 8: {id: 8, title: "Behavioral Issues"}
// 9: {id: 9, title: "Career Counseling"}
// 10: {id: 10, title: "Child or Adolescent"}
// 11: {id: 11, title: "Coping Skills"}
// 12: {id: 12, title: "Codependency"}
// 13: {id: 13, title: "Cognitive Behavioral"}
// 14: {id: 14, title: "Divorce"}
// 15: {id: 15, title: "Depression"}
// 16: {id: 16, title: "Family Conflict"}
// 17: {id: 17, title: "Life Coaching"}
// 18: {id: 18, title: "Life Transition"}
// 19: {id: 19, title: "Learning Disability"}
// 20: {id: 20, title: "Positive Psychology"}
// 21: {id: 21, title: "Pregnancy Postpartem"}
// 22: {id: 22, title: "Relationship Issues"}
// 23: {id: 23, title: "Self Esteem"}
// 24: {id: 24, title: "Stress"}
// }

// const topicsArr = Object.values(topics)
// //
// let topicEx = [
//     {id: 5, title: "ADHD"},
//     {id: 6, title: "Anger Management"},
//     {id: 7, title: "Anxiety"}
// ]

// let topic = topicEx.find(o => o.title === 'ADHD').id;
// console.log(topic.id); // 5