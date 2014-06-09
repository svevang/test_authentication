
Meteor.methods({
  "login": function(){
    console.log('logging in')
    var ip = headers.get(this, 'x-forwarded-for');
    var xff = headers.get(this, 'x-ip-chain');
    session = Sessions.findOne({score: ip + xff});
    if(session){
      // TODO, fixup the keys here
      console.log("inserting", ip)
      Sessions.insert({score: ip});
    }
    else{
      console.log('already logged in')
    }

    return "success!"
  },
  "logout": function(){
   // console.log('logging out', this.connection.httpHeaders)
    //var ip = headers.getClientIP();
    var self = this;
    var ip = headers.get(this, 'x-forwarded-for');
    var xff = headers.get(this, 'x-ip-chain');

    session = Sessions.findOne({score: ip});
    if(session){
      Sessions.remove(session._id)
      console.log("removed ", ip)
    }


    return "success!"
  }
})
