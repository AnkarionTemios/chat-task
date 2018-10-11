import * as actionTypes from './actionTypes'
import { push } from 'react-router-redux'

const userLoggedIn = user => ({
  type: actionTypes.USER_LOGGED_IN,
  user
})

const userLoggedOut = () => ({ type: actionTypes.USER_LOGGED_OUT })

export const logIn = user => dispatch => {
  dispatch(userLoggedIn(user))
  dispatch(push('/'))
}

export const logOut = () => dispatch => {
  dispatch(userLoggedOut())
  dispatch(push('/login'))
}

export const redirect = () => dispatch => dispatch(push('/login'))