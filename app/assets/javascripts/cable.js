// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();
  //  allows us to create subscriptions to the backend 

}).call(this);

//  received is what is invoked when you are broadcasted to (i.e. receive messsages)