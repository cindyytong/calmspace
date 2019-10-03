// login demo users 

import { login } from './session_actions';

export const loginDemoPatient = (e) => {
    e.preventDefault();
    this.props.login({ email: 'user1@calmspace.com', password: '12345678'})
    .then(() => this.props.history.push('/auth/user/chatroom/1'));
};

