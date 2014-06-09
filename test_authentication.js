Messages = new Meteor.Collection("sessions");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to test_authentication.";
  };

  Template.hello.events({
    'click input#login': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        Meteor.call('login');
    },
    'click input#logout': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        Meteor.call('logout');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
