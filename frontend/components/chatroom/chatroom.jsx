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
  
//   If you’re creating a full-stack app you’ll probably want to use the Redux store. For example, when data is received on the client-side, instead of setting local state, you could dispatch a Redux action to update the store. In addition, you may even want to separate out the App.cable.subscription.create function call into its own component.

  componentDidMount() {
    this.props.clearErrors();
    debugger
    // const chatroomId = this.props.user.chat_rooms.id; 
   
    // <<<<< DO I NEED TO LOAD EXISTING MESSAGES THROUGH CONTROLLER? >>>>>
    // existingMessages = this.props.getChatRoomMessages(chatroomId);
    // this.state.messages = existingMessages;

    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: this.props.chatrooms.id },
      {
          // subscribed client will listen to stream for new data, when data is sent into the stream via braodcast method, this function is invoked 
        received: data => {
          debugger
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