import React, {Component} from 'react'
import {render} from 'react-dom'
import {Launcher} from '../../src'
import messageHistory from './messageHistory';
import TestArea from './TestArea';
import Header from './Header';
import Footer from './Footer';
import monsterImgUrl from "./../assets/monster.png";
import Highlight from "react-highlight.js";
import './../assets/styles'



class Demo extends Component {

  constructor() {
    super();
    this.state = {
      messageList: messageHistory,
      newMessagesCount: 0
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        newMessagesCount: this.state.newMessagesCount + 1,
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  _onOpen() {
    this.setState({
      newMessagesCount: 0
    });
  }

  render() {
    return <div>
      <Header />
      <TestArea
        onMessage={this._sendMessage.bind(this)}
      />
      <Launcher
        agentProfile={{
          teamName: 'react-live-chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        newMessagesCount={this.state.newMessagesCount}
        onOpen={this._onOpen.bind(this)}
      />
      <img className="demo-monster-img" src={monsterImgUrl} />
      <Footer />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
