import * as actionTypes from './actionTypes'

const initialState = {
  messages: []
}

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.message)
      }
    case actionTypes.DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(message => message !== action.message)
      }
    default: return state
  }
}