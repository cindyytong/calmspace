import React from "react";

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
    e.preventDefault();
    const chatRoomId = this.props.chatroom.id;
    const type = this.props.session.memberType
    const userId = this.props.session.currentUserId;
    let newMessage = { 
      chat_room_id: chatRoomId, 
      body: this.state.body,
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