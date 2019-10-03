import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
 
    componentDidMount(){
        this.props.clearErrors();
    }

    constructor(props){
        super(props);
        this.state = {
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
        this.props.processForm(this.state)
            .then(() => this.props.history.push(`/auth/user/chatroom`));
    }
    

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
                        <input type="username" 
                            name="username"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
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
                        <div className='age-check-input'>
                            <input type="checkbox" 
                            name="age-check"
                            checked={this.state.over_age_13}
                            onClick={this.handleClick('over_age_13')}
                            className="check-field"
                            />
                            <label className="age-check-label">I am over the age of 13 and agree to the terms of use and privacy policy</label>
                        </div>
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
                        <Link to='/therapist/login'
                        className="demo-button">
                            Demo Therapist
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
};

export default withRouter(Signup);
