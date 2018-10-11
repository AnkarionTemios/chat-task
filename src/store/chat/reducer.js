import * as actionTypes from './actionTypes'
import { select } from 'helpers'

const initialState = {
  messages: [],
  rooms: [],
  currentRoom: null,
  selectedMessages: [],
  filteredMessages: [],
  query: ""
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
    case actionTypes.SELECT_ROOM:
      return {
        ...state,
        currentRoom: action.room
      }
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        messages: state.messages ? state.messages.concat(action.message) : [action.message]
      }
    case actionTypes.DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(message => message.id !== action.message)
      }
    case actionTypes.SELECT_MESSAGE:
      return {
        ...state,
        selectedMessages: select(state.selectedMessages, action.selectMessage)
      }
    case actionTypes.SEARCH_MESSAGE:
      return {
        ...state,
        query: action.query,
        filteredMessages: state.messages.filter(message => message.text.toLowerCase().match(action.query.toLowerCase()))
      }
    case actionTypes.CLEAN_SELECTED_MESSAGES:
      return {
        ...state,
        selectedMessages: []
      }
    default: return state
  }
}