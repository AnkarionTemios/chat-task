import * as actionTypes from './actionTypes'

const userSelectMessage = selectMessage => ({
  type: actionTypes.SELECT_MESSAGE,
  selectMessage
})

const userSendMessage = message => ({
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

const userSelectRoom = room => ({
  type: actionTypes.SELECT_ROOM,
  room
})

const userDeleteMessage = message => ({
  type: actionTypes.DELETE_MESSAGE,
  message
})

const userSearchMessage = query => ({
  type: actionTypes.SEARCH_MESSAGE,
  query
})

const cleanSelectedMessages = () => ({ type: actionTypes.CLEAN_SELECTED_MESSAGES })
 
export const selectMessage = message => dispatch => 
  dispatch(userSelectMessage(message))

export const searchMessage = query => dispatch =>
  dispatch(userSearchMessage(query))

export const selectRoom = room => dispatch => {
  dispatch(userSelectRoom(room))
  dispatch(fetchMessages(room))
  dispatch(cleanSelectedMessages())
}

export const sendMessage = message => (dispatch, getState) => {
  const state = getState()
  const newMessage = {
    user: state.user.user,
    text: message,
    id: state.chat.messages ? state.chat.messages.length + 1 : 0
  }
  const updatedMessages = state.chat.messages ? state.chat.messages.concat(newMessage) : [newMessage]
  localStorage.setItem(state.chat.currentRoom, JSON.stringify(updatedMessages))
  dispatch(userSendMessage(newMessage))
}

export const deleteMessage = message => (dispatch, getState) => {
  const state = getState()
  localStorage.setItem(
    state.chat.currentRoom, 
    JSON.stringify(state.chat.messages.filter(item => item.id !== message))
  )
  dispatch(userDeleteMessage(message))
}

export const deleteSelectedMessages = () => (dispatch, getState) => {
  const state = getState()
  state.chat.selectedMessages.forEach(message => dispatch(deleteMessage(message)))
}

export const addRoom = room => (dispatch, getState) => {
  const state = getState()
  localStorage.setItem('rooms', JSON.stringify(state.chat.rooms.concat(room)))
  dispatch(fetchRooms())
}

export const fetchMessages = () => (dispatch, getState) => {
  const state = getState()
  dispatch(fetchMessagesSuccess(JSON.parse(localStorage.getItem(state.chat.currentRoom))))
}

export const fetchRooms = () => dispatch => 
  dispatch(fetchRoomsSuccess(JSON.parse(localStorage.getItem('rooms'))))