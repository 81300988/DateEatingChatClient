import { w3cwebsocket as WebSocket } from "websocket";
var jwt = require('jsonwebtoken');

let generateToken = (user) => {
  //1. Dont use password and other sensitive fields
  //2. Use fields that are useful in other parts of the     
  //app/collections/models
  var u = {
    
      chatroomid: user.chatroomid,
      useropenconnectionid: user.useropenconnectionid,
      seconduserid: user.seconduserid
     
  };
   const token = jwt.sign(u,'secret', {
     expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
  return token
}


var socket

let openConnection = (user) => {
  let queryString = generateToken(user)
  let uri = "ws://localhost:80/ws" + "?token="+ queryString 
  socket =  new WebSocket(uri);
}

let connect = (cb) => {

  console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = msg => {
    console.log(msg);
    cb(msg)
  };

  socket.onclose = event => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = error => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = msg => {
  console.log("sending msg: ", msg);
  socket.send(msg);
};



export { connect, sendMsg, openConnection };
