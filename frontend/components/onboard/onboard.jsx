import React from 'react';
import { withRouter } from 'react-router-dom';


class Onboard extends React.Component {
    render(){
        return(
        <div className="onboard-page-container">
            <h2>Onboard</h2>
            <p>Calmspace will connect you with a licensed therapist, who you can message from anywhere at any time.</p>
            <p>First, let’s get started by answering a few questions so we can help find the best matches for you.</p>
            <div clasName="question-container">
                <h4 className="question">What led you to seek help today?</h4>
                <textarea name="answer-why" id="answer-why" cols="30" rows="15"></textarea>

            </div>
        </div>
        

        )
    }
};

export default withRouter(Onboard);