import React, { Component } from 'react'

import { connect } from 'react-redux'
import { sendMessage } from 'store/chat'

import './SendMessageBox.css'

class SendMessageBox extends Component {

  state = {
    message: ""
  }

  handleChange = event => this.setState({ message: event.target.value })

  handleClick = () => {
    this.props.sendMessage(this.state.message)
    this.setState({ message: "" })
  }

  isValid() {
    return [
      this.state.message.length < 1,
      this.props.currentRoom.length
    ].every(isValid => isValid)
  }

  render() {
    return (
      <div className="send-message-box">
        
        <div className="uk-flex">
      
          <textarea 
            className="uk-width-expand" 
            placeholder="Enter your message"
            onChange={ this.handleChange }
            value={ this.state.message } 
          />
      
          <button disabled={ this.isValid() } onClick={ this.handleClick }>
            <i className="fal fa-envelope uk-width-auto uk-margin-small-left" />
          </button>
        
        </div>
      
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentRoom: state.chat.currentRoom
})

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageBox)