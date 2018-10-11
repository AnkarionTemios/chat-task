import { combineReducers } from 'redux'
import { userReducer } from './authentication'
import { chatReducer } from './chat'

export default combineReducers({
  user: userReducer,
  chat: chatReducer
})