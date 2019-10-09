import React from "react";
import MessageFormContainer from './message_form_container';
import { withRouter } from 'react-router-dom';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: this.props.messages };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    const chatRoomId = this.props.user.chat_rooms.id;
    this.props.clearErrors();
    this.props.getUserChatRoom(chatRoomId); 
    this.props.getChatRoomMessages(chatRoomId);

    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: chatRoomId },
      // update local state with message 
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data.message)
          });
        },
        //  sends data to back end and invokes the backend speak 
        speak: function(data) {
          return this.perform("speak", data );
        }
      }
    );
  }
  
  componentDidUpdate() {
    // this.bottom.current.scrollIntoView();
  }
  
  render() {
    debugger
    const messageList = this.state.messages.map(message => {
      debugger
      return (
        <>
        <li className="chatroom-li" key={message.id}>
          <p className="message-time-sent">{message.created_at}</p>
          {message.body} 
          <div ref={this.bottom} />
        </li>
        </>
      );
    });
    return (
      <div className="chatroom-container">
        <div className="message-list">{messageList}</div>
        <MessageFormContainer />
      </div>
    );
  }
}

export default withRouter(ChatRoom);