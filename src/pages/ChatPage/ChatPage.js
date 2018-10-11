import React, { Component } from 'react'

import { connect } from 'react-redux'
import { select, send, fetchMessages, fetchRooms } from 'store/chat'
import { redirect, logOut } from 'store/authentication'

import { Chatbox } from 'ui/components'

import './ChatPage.css'

class ChatPage extends Component {

  componentDidMount() {
    if (this.props.user) {
      this.props.fetchMessages()
      this.props.fetchRooms()

      window.addEventListener("storage", () => {
        this.props.fetchMessages()
        this.props.fetchRooms()
      })
    } else {
      this.props.redirect()
    }
  }

  componentWillUnmount() {
    window.removeEventListener("storage", () => {
      this.props.fetchMessages()
      this.props.fetchRooms()
    })
  }

  render() {
    const { logOut, rooms, messages, sendMessage, selectMessage, selectedMessages } = this.props
    return (
      <div className="chat-page">
        <Chatbox
          logOut={ logOut }
          rooms={ rooms }
          messages={ messages }
          sendMessage={ sendMessage }
          selectMessage={ selectMessage }
          selectedMessages={ selectedMessages } 
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  rooms: state.chat.rooms,
  messages: state.chat.messages,
  selectedMessages: state.chat.selectedMessages
})

const mapDispatchToProps = dispatch => ({
  redirect: () => dispatch(redirect()),
  fetchMessages: () => dispatch(fetchMessages()),
  fetchRooms: () => dispatch(fetchRooms()),
  sendMessage: message => dispatch(send(message)),
  selectMessage: message => dispatch(select(message)),
  logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)