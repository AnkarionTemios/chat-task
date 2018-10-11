import * as actionTypes from './actionTypes'
import { select } from 'helpers'

const initialState = {
  messages: [],
  selectedMessages: [],
  rooms: [],
  currentRoom: "Flood"
}

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.rooms
      }
    case actionTypes.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.messages
      }
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.message)
      }
    case actionTypes.DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(message => message.id !== action.message.id)
      }
    case actionTypes.SELECT_MESSAGE:
      return {
        ...state,
        selectedMessages: select(state.selectedMessages, action.selectMessage)
      }
    default: return state
  }
}