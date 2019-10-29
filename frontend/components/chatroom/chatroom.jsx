import React from "react";
import MessageFormContainer from './message_form_container';
import { withRouter } from 'react-router-dom';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: props.messages };
    // this.bottom = React.createRef();
    this.chatRoomId = this.props.match.params.chatRoomId;
  }

  componentDidMount() {
    this.props.clearErrors();
    this.props.getChatRoomMessages(this.chatRoomId);
    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: this.chatRoomId },
      {
        received: data => {
          switch (data.type) {
            case "message":
              this.props.receiveMessage(data.message)
              break;
            case "messages":
              // this.setState({
              //   messages: data.messages
              // });
              break;
          }
        },
        speak: function(data) {
          return this.perform("speak", data );
        }
      }
    );
  }

  loadChat(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].load();
  }
  
  render() {
    const messageList = this.props.messages.map(message => {
      let classStyle;
      this.props.session.memberType === 'User' ? classStyle = 'grey-message' : classStyle = 'green-message';
      return (
          <div className={`chatroom-message ${classStyle}`} key={message.id}>
            <p>{message.body}</p> 
          </div>
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