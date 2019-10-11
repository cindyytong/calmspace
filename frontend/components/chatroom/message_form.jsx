import React from "react";

// manages the submission of a new message 
class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }
  
  handleSubmit(e) {
    debugger
    e.preventDefault();
    // let chatRoomId = this.props.match.params.chatRoomId;
    let chatRoomId = this.props.chatroom.id;
    let chatRoomUserId = this.props.chatroom.user.id;
    let type;
    let userId = this.props.user.id;
    // if(this.props.user.current_therapist_id !== null){
    if(userId === chatRoomUserId){
      type = 'User';
    } else {
      type = 'Therapist';
    }
    let newMessage = { 
      chat_room_id: chatRoomId, 
      body: this.state.body,
      // messageable_id: this.props.user.id,
      messageable_id: userId,
      messageable_type: type
    }
    
    App.cable.subscriptions.subscriptions[0].speak({ message: newMessage});
    
    this.setState({ body: "" });
  }
  
  render() {
    return (
      <div className="submit-message-container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="send-message-field">
            <input
              type="text"
              className="send-message-text"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Type message here"
            />
            <input className="submit-button" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default MessageForm;