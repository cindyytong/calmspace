import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        .then(() => this.props.history.push(`/auth/user/chatroom`));
    }

    loginDemoPatient(e){
        e.preventDefault();
        this.props.processForm({ email: 'user1@calmspace.com', password: '12345678'})
        .then(() => this.props.history.push('/auth/user/chatroom'));
    };
    

    render(){
        return (
            <div className="login-form-container grey-fill">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="logoWrap">
                        <img src={window.formlogoURL} className="nav-logo"/>
                    </div>
                    <div className="login-form">
                        <div className="error">Error test</div>
                        <div className="form-row">
                            <input type="email" 
                                name="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                                className="login-field"
                            />
                        </div>
                        <div className="error">Error test</div>
                        <div className="form-row">
                            <input type="password" 
                                name="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                className="login-field"
                            />
                        </div>
                        <input 
                            className="session-submit"
                            type="submit" 
                            value={this.props.formType}
                        />
                        <button 
                        className="demo-button"
                        onClick={this.loginDemoPatient}>
                            Login as Demo Patient
                        </button>
                        <Link to='/therapist/login'
                        className="demo-button">
                            Login as Demo Therapist
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
};

export default withRouter(LoginForm);
