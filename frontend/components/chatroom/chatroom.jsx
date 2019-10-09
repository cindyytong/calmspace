import React from "react";
import MessageFormContainer from './message_form_container';
import { withRouter } from 'react-router-dom';

class ChatRoom extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    const chatRoomId = this.props.user.chat_rooms.id;
    this.props.clearErrors();
    this.props.getUserChatRoom(chatRoomId); // update chatroom state
    debugger
    this.props.getChatRoomMessages(chatRoomId);

    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: this.props.chatrooms.id },
      {
          // subscribed client will listen to stream for new data, when data is sent into the stream via braodcast method, this function is invoked 
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
    const messageList = this.state.messages.map(message => {
      debugger
      return (
        <>
        <p className="message-time-sent">{message.created_at}</p>
        <li className="chatroom-li" key={message.id}>
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