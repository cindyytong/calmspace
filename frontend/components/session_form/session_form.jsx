import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    
    componentDidMount(){
        this.props.clearErrors();
    }
    
    constructor(props){
        super(props);
        this.state = {
            email: props.email || '',
            password: '',
            over_age_13: props.over_age_13 || false, /// How should this match what is on backend?  Does this mess up therapists?
            username: props.username || ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoPatient = this.loginDemoPatient.bind(this);
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
            this.setState({
                [field]: true
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user) // add in success cb for where to route to 
        .then(() => this.props.history.push(`/auth/user/chatroom`));
    }

    loginDemoPatient(e){
        e.preventDefault();
        this.props.processForm({ email: 'user1@calmspace.com', password: '12345678'})
        .then(() => this.props.history.push('/auth/user/chatroom'));
    };
    

    render(){
        // signup fields for users only 
        let ageCheck;
        let demoLink;
        let userNameField;

        if (this.props.formType === 'Sign Up'){
            ageCheck =  
            ( <div className='age-check-input'>
                <input type="checkbox" 
                name="age-check"
                value={this.state.over_age_13}
                onClick={this.check('over_age_13')}
                />
                <label className="age-check-label">I am over the age of 13 and agree to the terms of use and privacy policy</label>
            </div>); 

            demoLink = <button>Demo User</button>;

            userNameField = (
                <input type="username" 
                name="username"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
                className="login-field"/>);
        };

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h3>{this.props.formType}</h3>
                    {userNameField}
                    <div className="login-form">
                        <input type="email" 
                            name="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="login-field"
                        />
                        <br></br>
                        <input type="password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="login-field"
                        />
                        <br></br>
                        {ageCheck}
                        <input 
                            className="session-submit"
                            type="submit" 
                            value={this.props.formType}
                        />
                        <br></br>
                        <button 
                        className="demo-button"
                        onClick={this.loginDemoPatient}>
                            Demo Patient
                        </button>
                        <Link to='/therapist/demo'
                        className="demo-button">
                            Demo Therapist
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
};

export default withRouter(SessionForm);
