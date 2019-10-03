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
                        <br></br>
                        <input type="password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="login-field"
                        />
                        <br/>
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

export default withRouter(LoginForm);
