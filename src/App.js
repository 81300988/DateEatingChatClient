import React, { Component } from "react";
import "./App.css";

import Button from '@material-ui/core/Button';
import WebSocket from './components/WebSocket'

const user1 = {
  chatroomid: "123",
  useropenconnectionid: "1",
  seconduserid: "2"
}

const user2 = {
  chatroomid: "123",
  useropenconnectionid: "2",
  seconduserid: "1"
}

const user3 = {
  chatroomid: "321",
  useropenconnectionid: "3",
  seconduserid: "4"
}

const user4 = {
  chatroomid: "321",
  useropenconnectionid: "4",
  seconduserid: "3"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      chosenUser: 0
    }
  }
  renderButton(){
    return (
      <>
      <div className="App">
        <Button onClick={() => {
          this.setState({chosenUser:1})
        }}>
          User1
        </Button>
      </div>
      <div className="App">
      <Button onClick={() => {
          this.setState({chosenUser:2})
        }}>
          User2
        </Button>
    </div>
    <div className="App">
        <Button onClick={() => {
          this.setState({chosenUser:3})
        }}>
          User3
        </Button>
      </div>
      <div className="App">
      <Button onClick={() => {
          this.setState({chosenUser:4})
        }}>
          User4
        </Button>
    </div>
    </>
    )
  }
  renderChat(){
    return this.state.chosenUser === 1? 
            (<WebSocket user={user1}/>): 
            this.state.chosenUser === 2?
            (<WebSocket user={user2}/>):
            this.state.chosenUser === 3?
            (<WebSocket user={user3}/>):
            this.state.chosenUser === 4?
            (<WebSocket user={user4}/>):
            (<></>)
  }
  render() {
    return (
      <>
      {this.renderButton()}
      {this.renderChat()}
    </>
    );
  }
  
}

export default App;
