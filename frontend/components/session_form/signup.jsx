import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SimpleNavBar from '../navigation/simplenavbar';

class Signup extends React.Component {
    componentDidMount(){
        this.props.clearErrors();
    }

    constructor(props){
        super(props);
        this.state = {
            id: '',
            username: '',
            email: '',
            password: '',
            over_age_13: false
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

    handleClick(field) {
        return(e) => {
            this.setState({
                [field]: e.target.checked
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state, "user")
            .then(() => {
                this.props.history.push(`/auth/user/onboard`)
            });
    }

    loginDemoPatient(e){
        e.preventDefault();
        this.props.processForm({ email: 'user1@calmspace.com', password: '12345678'})
        .then((chatRoomId) => {
            this.props.history.push(`/auth/user/chatroom/${chatRoomId}`);
        })}
    };
    

    render(){
        let displayError;
        if (this.props.errors.length > 0){
            displayError = this.props.errors[0];
        }

        return (
            <>
            <SimpleNavBar />
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="logoWrap">
                        <img src={window.formlogoURL} className="nav-logo"/>
                    </div>
                    <div className="login-form">
                        <div className="form-row">
                            <input type="email" 
                                name="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                                className="login-field"
                            />
                        </div>
                        <div className="form-row">
                            <input type="username" 
                                name="username"
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="Username"
                                className="login-field"
                            />
                        </div>
                        <div className="field-description">This will be the name your therapist sees</div>
                        <div className="form-row">
                            <input type="password" 
                                name="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                className="login-field"
                            />
                        </div>
                        <div className="field-description">8 character minimum</div>
                        <div className="field-description"></div>
                        <div className="age-row">
                           <input type="checkbox" 
                                name="age-check"
                                // checked={this.state.over_age_13}
                                onClick={this.handleClick('over_age_13')}
                                className="check-field"
                            />
                            <label className="age-check-label">I am over the age of 13 and agree to the Terms of Use and Privacy Policy</label>
                        </div>
                        <div className="error">{displayError}</div>
                        <div className="button-row">
                            <input 
                                className="session-submit white green-fill"
                                type="submit" 
                                value={this.props.formType}
                            />
                        </div>
                        <div className="button-row">
                            <p className="login-description grey">Log in as </p>
                            <Link to="/auth/user/chatroom"
                            className="demo-link green"
                            onClick={this.loginDemoPatient}>
                                 Demo Patient
                            </Link>
                            <p className="login-description grey">or </p> 
                            <Link to='/therapist/login'
                            className="demo-link green">
                                  Demo Therapist
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            </>
        )
    }
};

export default withRouter(Signup);
