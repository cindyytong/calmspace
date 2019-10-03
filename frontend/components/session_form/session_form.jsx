import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        debugger
        this.state = {
            email: '',
            password: '',
            over_age_13: '' /// How should this match what is on backend?
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
      return (e) => {
          this.setState({
              [field]: e.currentTarget.value
          });
      }
    }

    check(field) {
        return(e) => {
            debugger
            this.setState({
                [field]: true
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        debugger
        const user = Object.assign({}, this.state);
        this.props.processForm(user) // add in success cb for where to route to 
        debugger
    }

    render(){
        let ageCheck; 
        if (this.props.formType === 'Sign Up'){
            ageCheck =  
            ( <div className='age-check-input'>
                <input type="checkbox" 
                name="age-check"
                value={this.state.over_age_13}
                onClick={this.check('over_age_13')}
                />
                <label className="age-check-label">I am over the age of 13 and agree to the terms of use and privacy policy</label>
            </div>)
        };
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h3>{this.props.formType}</h3>
                    <div className="login-form">
                        <input type="email" 
                            name="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="login-field"
                        />
                        <br/>
                        <input type="password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="login-field"
                        />
                        <br/>
                        {ageCheck}
                        <input 
                            className="session-submit"
                            type="submit" 
                            value={this.props.formType}
                        />
                    </div>
                </form>
            </div>
        )
    }
};

export default withRouter(SessionForm);
