import React from "react";
import MessageFormContainer from './message_form_container';
import { withRouter } from 'react-router-dom';

class ChatRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: props.messages };
    debugger
    // this.bottom = React.createRef();
  }

  componentDidMount() {
    const chatRoomId = this.props.user.chat_rooms.id; 
    this.props.clearErrors();
    this.props.getUserChatRoom(chatRoomId); 
    this.props.getChatRoomMessages(chatRoomId);

    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: chatRoomId },
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

  
  // componentDidUpdate() {
  //   this.bottom.current.scrollIntoView();
  // }
  
  render() {
    const messageList = this.props.messages.map(message => {
      let classStyle;
      if( message.messageable_id === this.props.user.id){
        classStyle = 'grey-message';
      } else {
        classStyle = 'green-message';
      }
      return (
        <>
          <div className={`chatroom-message ${classStyle}`} key={message.id}>
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