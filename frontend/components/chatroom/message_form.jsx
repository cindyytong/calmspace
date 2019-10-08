import React from "react";

// manages the submission of a new message 
class MessageForm extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = { body: "" };
  }
  
  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // App.cable.subscriptions.subscriptions allows us ot access all subscriptions
    App.cable.subscriptions.subscriptions[0].speak({ message: { body: this.state.body,
    messageable_type: 'User', messageable_id:11}});
    this.setState({ body: "" });
  }
  
  render() {
    return (
      <div>
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