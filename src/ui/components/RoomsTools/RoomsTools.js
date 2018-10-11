import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addRoom } from 'store/chat'

import { GreyInput } from 'ui/components'

import './RoomsTools.css'

class RoomsTools extends Component {

  state = {
    newRoom: ""
  }

  handleChange = event => this.setState({ newRoom: event.target.value })

  handleClick = () => {
    this.props.addRoom(this.state.newRoom)
    this.setState({ newRoom: "" })
  }

  render() {
    return (
      <div className="rooms-tools">
        
        <div className="uk-flex">
                          
          <GreyInput 
            type="text" 
            name="searchQuery" 
            className="uk-width-3-4" 
            placeholder="New room name"
            value={ this.state.newRoom }
            onChange={ this.handleChange } 
          />
    
          <button 
            onClick={ this.handleClick }
            className="uk-width-1-4 uk-margin-small-left" 
            disabled={ this.state.newRoom.length < 3 } 
          >
            <i className="fal fa-plus uk-width-auto uk-margin-small-left" />
          </button>
    
        </div>
      
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addRoom: room => dispatch(addRoom(room))
})

export default connect(null, mapDispatchToProps)(RoomsTools)