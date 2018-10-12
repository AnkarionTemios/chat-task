import React, { Component } from 'react'

import classNames from 'classnames'

import './Message.css'

export class Message extends Component {

  state = {
    toolsAreVisible: false
  }

  handleMouseEnter = () => this.setState({ toolsAreVisible: true })

  handleMouseLeave = () => this.setState({ toolsAreVisible: false })

  render() {
    const { name, text, id, selected, selectMessage, deleteMessage } = this.props
    return (
      <div 
        className={ classNames("message uk-margin-small-bottom", selected && "selected")}
        onClick={ () => selectMessage(id) }
        onMouseEnter={ this.handleMouseEnter } 
        onMouseLeave={ this.handleMouseLeave }
      >
        
        <div className="uk-flex">

          <p className="name uk-width-expand">{ name }</p>

          { 
            (this.state.toolsAreVisible || selected) && 
            <i onClick={ () => deleteMessage(id) } className="fal fa-trash"></i>
          }
          
        </div>
        
        <p className="text">{ text }</p>
        
      </div>
    )
  }
}