import React from 'react'

import { connect } from 'react-redux'

import { Chatbox } from 'ui/components'

import './ChatPage.css'

const ChatPage = props => (
  <div className="chat-page">
    <Chatbox />
  </div>
)

export default connect(null, null)(ChatPage)