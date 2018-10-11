import { combineReducers } from 'redux'
import { userReducer } from './chat'

export default combineReducers({
  user: userReducer
})