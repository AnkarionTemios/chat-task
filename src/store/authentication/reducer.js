import * as actionTypes from './actionTypes'

const initialState = {
  user: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGGED_IN:
      return {
        ...state,
        user: action.user
      }
    case actionTypes.USER_LOGGED_OUT:
      return {
        ...state,
        user: null
      }
    default: return state
  }
}