
Meteor.methods({
  "login": function(){
    console.log('logging in')
    //Messages.insert({text: "Hello, world!"});

    return "success!"
  },
  "logout": function(){
    console.log('logging out')
    return "success!"
  }
})
