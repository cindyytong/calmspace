import React from "react";

// manages the submission of a new message 
class MessageForm extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = { body: "" };
  }
  
  // componentDidUpdate(){
  //   debugger
  //   const chatRoomId = this.props.user.chat_rooms.id;
  //   this.props.getChatRoomMessages(chatRoomId);
  // }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    debugger
    let type;
    // Is there a better way to check if therapist or patient? 
    if(this.props.user.current_therapist_id !== null){
      type = 'User'
    } else {
      type = 'Therapist'
    }
    App.cable.subscriptions.subscriptions[0].speak({ message: { 
      chat_room_id: this.props.chatrooms[0].id, 
      body: this.state.body,
      messageable_id: this.props.user.id,
      messageable_type: type
    }});
    this.setState({ body: "" });
  }
  
  render() {
    return (
      <div className="submit-message-container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Type message here"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default MessageForm;