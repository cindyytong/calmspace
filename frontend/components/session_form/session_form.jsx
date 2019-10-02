import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
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

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user) // add in success cb for where to route to 
    }

    render(){
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div>Talkspace goes here</div>
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
