import React from 'react'

import { connect } from 'react-redux'
import { selectRoom } from 'store/chat'

import { Room } from 'ui/components'

import './RoomsList.css'

const RoomsList = ({ rooms, selectRoom, currentRoom }) => {

  const renderRooms = (room, index) => (
    <Room 
      key={ index } 
      name={ room }
      onClick={ selectRoom } 
      active={ currentRoom === room } 
    />
  )
  
  return (
    <div className="rooms">
      { rooms && rooms.map(renderRooms) }
    </div>
  )
}

const mapStateToProps = state => ({
  rooms: state.chat.rooms,
  currentRoom: state.chat.currentRoom
})

const mapDispatchToProps = dispatch => ({
  selectRoom: room => dispatch(selectRoom(room))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList)