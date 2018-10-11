import React from 'react'

import { 
  Message, 
  RoomsList,
  RoomsTools,
  MessagesTools, 
  SendMessageBox 
} from 'ui/components'

import './Chatbox.css'

export const Chatbox = ({ messages, selectMessage, deleteMessage, selectedMessages }) => (
  <div className="chatbox uk-width-4-5 uk-position-center">
    
    <div className="uk-flex">
    
      <div className="uk-width-1-4">
      
        <RoomsTools />

        <RoomsList />
      
      </div>

      <div className="uk-width-3-4">

        <MessagesTools />
      
        <div className="messages-field">
          { messages && messages.map(message => (
            <Message 
              key={ message.id } 
              id={ message.id }
              name={ message.user } 
              text={ message.text }
              selectMessage={ selectMessage }
              deleteMessage={ deleteMessage }
              selected={ selectedMessages.some(id => id === message.id) } 
            />
          )) }
        </div>

        <div className="send-message-field">
          <SendMessageBox />
        </div>
      
      </div>
    
    </div>
  
  </div>
)