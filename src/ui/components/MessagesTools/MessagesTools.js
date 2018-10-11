import React from 'react'

import { connect } from 'react-redux'
import { logOut } from 'store/authentication'
import { deleteSelectedMessages, searchMessage } from 'store/chat'

import { GreyInput, PurpleButton } from 'ui/components'

import './MessagesTools.css'

const MessagesTools = ({ logOut, messages, selectedMessages, deleteSelectedMessages, searchMessage, query }) => (
  <div className="messages-tools">

    <div className="uk-flex">

      <div className="uk-width-expand">
        <GreyInput 
          type="text" 
          value={ query }
          disabled={ !messages }
          name="searchQuery" 
          className="uk-width-1-2" 
          placeholder="Search messages"
          onChange={ event => searchMessage(event.target.value) } 
        />
      </div>
    
      <PurpleButton onClick={ deleteSelectedMessages } disabled={ selectedMessages.length < 1 } className="uk-margin-small-right">
        Delete selected messages
      </PurpleButton>

      <PurpleButton onClick={ logOut }>
        Log out
      </PurpleButton>

    </div>
  
  </div>
)

const mapStateToProps = state => ({
  query: state.chat.query,
  messages: state.chat.messages,
  selectedMessages: state.chat.selectedMessages,
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  deleteSelectedMessages: () => dispatch(deleteSelectedMessages()),
  searchMessage: query => dispatch(searchMessage(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesTools)