import React from 'react';
import { Link } from 'react-router-dom';
import AuthNavContainer from '../navigation/auth_nav_container';
import ChatRoom from './chatroom';


const UserChatroom = () => {
    return (
        <>
        <AuthNavContainer />
        <ChatRoom />
        </>
    )
};

export default UserChatroom;