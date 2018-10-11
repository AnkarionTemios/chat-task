import * as actionTypes from './actionTypes'

const userLoggedIn = user => ({
  type: actionTypes.USER_LOGGED_IN,
  user
})

const userLoggedOut = () => ({ type: actionTypes.USER_LOGGED_OUT })

export const logIn = user => dispatch => {
  localStorage.setItem('user', user)
  dispatch(userLoggedIn(user))
}

export const logOut = () => dispatch => {
  localStorage.removeItem('user')
  dispatch(userLoggedOut())
}