import React, { Component } from 'react'

import { 
  Rooms, 
  Message, 
  GreyInput, 
  PurpleButton, 
  SendMessageBox 
} from 'ui/components'

import './Chatbox.css'

export class Chatbox extends Component {

  handleSearch = event => this.props.messages.filter(messages => messages.text.match(event.target.value))

  render() {
    const { logOut, rooms, messages, sendMessage, selectMessage, selectedMessages } = this.props
    return (
      <div className="chatbox uk-width-4-5 uk-position-center">
        <div className="uk-flex">
        
          <div className="uk-width-1-4">
          
            <div className="rooms-tools">
             
              <div className="uk-flex">
                  
                <GreyInput 
                  type="text" 
                  name="searchQuery" 
                  className="uk-width-3-4" 
                  placeholder="New room name"
                  onChange={ this.handleChange } 
                />

                <button 
                  onClick={ this.handleClick }
                  className="uk-width-1-4 uk-margin-small-left" 
                  // disabled={ this.state.message.length < 1 } 
                >
                  <i className="fal fa-plus uk-width-auto uk-margin-small-left" />
                </button>

              </div>

            </div>

            <Rooms rooms={ rooms } />
          
          </div>
    
          <div className="uk-width-3-4">
    
            <div className="messages-tools">

              <div className="uk-flex">
    
                <div className="uk-width-expand">
                  <GreyInput 
                    type="text" 
                    name="searchQuery" 
                    className="uk-width-1-2" 
                    placeholder="Search messages"
                    onChange={ this.handleChange } 
                  />
                </div>
              
                <PurpleButton disabled={ selectedMessages.length < 1 } className="uk-margin-small-right">
                  Delete selected messages
                </PurpleButton>
    
                <PurpleButton onClick={ logOut }>
                  Log out
                </PurpleButton>
    
              </div>
              
            </div>
          
            <div className="messages-field">
              { messages && messages.map(message => (
                <Message 
                  key={ message.id } 
                  id={ message.id }
                  name={ message.user } 
                  text={ message.text }
                  selectMessage={ selectMessage }
                  selected={ selectedMessages.some(id => id === message.id) } 
                />
              )) }
            </div>
    
            <div className="send-message-field">
              <SendMessageBox sendMessage={ sendMessage } />
            </div>
          
          </div>
        
        </div>
      
      </div>

    )
  }
} 