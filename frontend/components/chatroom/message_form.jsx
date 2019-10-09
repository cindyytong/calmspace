import React from "react";

// manages the submission of a new message 
class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = { body: "" };
  }
  
  update(field) {
    debugger
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    debugger
    // App.cable.subscriptions.subscriptions allows us ot access all subscriptions
    let type;
    if(this.props.user.current_therapist_id !== null){
      type = 'User'
    } else {
      type = 'Therapist'
    }
    App.cable.subscriptions.subscriptions[0].speak({ message: { 
      chatroom_id: this.props.chatrooms.id, 
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