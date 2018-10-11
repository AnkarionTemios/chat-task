import React, { Component } from 'react'

import { Room } from 'ui/components'

import './Rooms.css'

export class Rooms extends Component {
  
  state = {
    activeTab: 0
  }

  handleClick = index => this.setState({ activeTab: index })

  renderRooms = (room, index) => (
    <Room 
      key={ index } 
      name={ room }
      index={ index }
      onClick={ this.handleClick } 
      active={ this.state.activeTab === index } 
    />
  )
  
  render() {
    console.log(this.props)
    return (
      <div className="rooms">
        { this.props.rooms && this.props.rooms.map(this.renderRooms) }
      </div>
    )
  }
}