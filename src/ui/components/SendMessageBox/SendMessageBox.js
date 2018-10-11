import React, { Component } from 'react'

import './SendMessageBox.css'

export class SendMessageBox extends Component {

  state = {
    message: ""
  }

  handleChange = event => this.setState({ message: event.target.value })

  handleClick = () => {
    this.props.sendMessage(this.state.message)
    this.setState({ message: "" })
  }

  render() {
    return (
      <div className="send-message-box">
        
        <div className="uk-flex">
      
          <textarea 
            // cols="3" 
            // rows="2"
            className="uk-width-expand" 
            placeholder="Enter your message"
            onChange={ this.handleChange }
            value={ this.state.message } 
          />
      
          <button disabled={ this.state.message.length < 1 } onClick={ this.handleClick }>
            <i className="fal fa-envelope uk-width-auto uk-margin-small-left" />
          </button>
        
        </div>
      
      </div>
    )
  }
}