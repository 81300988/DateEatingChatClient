import React, { Component } from "react";
import ChatInput from '../ChatInput'
import Header from '../Header';
import ChatHistory from '../ChatHistory'
import { connect, sendMsg, openConnection} from "../../api";

class WebSocket extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      chatHistory:[]
    }
}
  componentDidMount(){
    openConnection(this.props.user)
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  
  }

  send(event) {
    if(event.keyCode === 13){
      sendMsg(event.target.value)
      event.target.value = ''
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
  
}

export default WebSocket;
