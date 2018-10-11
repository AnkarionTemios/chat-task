import * as actionTypes from './actionTypes'

const selectMessage = selectMessage => ({
  type: actionTypes.SELECT_MESSAGE,
  selectMessage
})

const sendMessage = message => ({
  type: actionTypes.SEND_MESSAGE,
  message
})

const fetchMessagesSuccess = messages => ({
  type: actionTypes.FETCH_MESSAGES_SUCCESS,
  messages
})

const fetchRoomsSuccess = rooms => ({
  type: actionTypes.FETCH_ROOMS_SUCCESS,
  rooms
})

export const select = message => dispatch => 
  dispatch(selectMessage(message))

export const send = message => (dispatch, getState) => {
  const state = getState()
  const newMessage = {
    user: state.user.user,
    text: message,
    id: state.chat.messages.length + 1
  }
  const updatedMessages = state.chat.messages.concat(newMessage)
  localStorage.setItem('messages', JSON.stringify(updatedMessages))
  dispatch(sendMessage(newMessage))
}

export const fetchMessages = () => dispatch =>
  dispatch(fetchMessagesSuccess(JSON.parse(localStorage.getItem('messages'))))

export const fetchRooms = () => dispatch => 
  dispatch(fetchRoomsSuccess(JSON.parse(localStorage.getItem('rooms'))))