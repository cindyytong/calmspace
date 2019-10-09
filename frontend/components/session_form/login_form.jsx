import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SimpleNavBar from '../navigation/simplenavbar';


class LoginForm extends React.Component {
    
    componentDidMount(){
        this.props.clearErrors();
    }
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
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

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user) // add in success cb for where to route to 
        .then(() => this.props.history.push(`/auth/user/chatroom/${user.id}`));
    }

    loginDemoPatient(e){
        e.preventDefault();
        this.props.processForm({ email: 'user1@calmspace.com', password: '12345678'})
        .then(() => this.props.history.push(`/auth/user/chatroom/1`));
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
                        <div className="error">{displayError}</div>
                        <div className="form-row">
                            <input type="password" 
                                name="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                className="login-field"
                            />
                        </div>
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

export default withRouter(LoginForm);
