import React, { Component } from 'react'

import { connect } from 'react-redux'
import { selectMessage, fetchMessages, fetchRooms, deleteMessage } from 'store/chat'
import { redirect } from 'store/authentication'

import { Chatbox } from 'ui/components'

import './ChatPage.css'

class ChatPage extends Component {

  componentDidMount() {
    if (this.props.user) {
      this.fetchData()
      window.addEventListener("storage", () => this.fetchData())
    } else {
      this.props.redirect()
    }
  }

  componentWillUnmount() {
    window.removeEventListener("storage", () => this.fetchData())
  }

  fetchData = () => {
    this.props.fetchMessages()
    this.props.fetchRooms()
  }
 
  render() {
    const { messages, filteredMessages, deleteMessage, selectMessage, selectedMessages } = this.props
    return (
      <div className="chat-page">
        <Chatbox
          selectMessage={ selectMessage }
          deleteMessage={ deleteMessage }
          selectedMessages={ selectedMessages } 
          messages={ filteredMessages.length ? filteredMessages : messages }
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  messages: state.chat.messages,
  selectedMessages: state.chat.selectedMessages,
  filteredMessages: state.chat.filteredMessages
})

const mapDispatchToProps = dispatch => ({
  redirect: () => dispatch(redirect()),
  fetchRooms: () => dispatch(fetchRooms()),
  fetchMessages: () => dispatch(fetchMessages()),
  deleteMessage: message => dispatch(deleteMessage(message)),
  selectMessage: message => dispatch(selectMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)