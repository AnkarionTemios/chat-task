import * as actionTypes from './actionTypes'
import { push } from 'react-router-redux'

const userLoggedIn = user => ({
  type: actionTypes.USER_LOGGED_IN,
  user
})

const userLoggedOut = () => ({ type: actionTypes.USER_LOGGED_OUT })

export const logIn = user => dispatch => {
  localStorage.setItem('user', user)
  dispatch(userLoggedIn(user))
  dispatch(push('/'))
}

export const logOut = () => dispatch => {
  localStorage.removeItem('user')
  dispatch(userLoggedOut())
  dispatch(push('/login'))
}