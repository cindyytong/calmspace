import React from "react";
import MessageFormContainer from './message_form_container';
import { withRouter } from 'react-router-dom';

class ChatRoom extends React.Component {

  componentDidMount() {
    const chatRoomId = this.props.user.chat_rooms.id; // therapist can have many ids 
    this.props.clearErrors();
    this.props.getUserChatRoom(chatRoomId); 
    this.props.getChatRoomMessages(chatRoomId);

    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: chatRoomId },
      {
        received: data => {
          this.setState({
            messages: this.props.messages.concat(data.message)
          });
        },
        speak: function(data) {
          return this.perform("speak", data );
        }
      }
    );
  }

  constructor(props) {
    super(props);
    this.state = { messages: props.messages };
    this.bottom = React.createRef();
  }

  
  componentDidUpdate() {
    // this.bottom.current.scrollIntoView();
  }
  
  render() {
    const messageList = this.props.messages.map(message => {
      return (
        <>
          <div className="chatroom-message" key={message.id}>
            <p>{message.body}</p> 
          </div>
        </>
      );
    });
    return (
      <div className="chatroom-container">
        <div className="message-list">
          {messageList}
        </div>
        <MessageFormContainer />
      </div>
    );
  }
}

export default withRouter(ChatRoom);