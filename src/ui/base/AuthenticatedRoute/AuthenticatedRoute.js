import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isUserAuthenticated } from 'helpers'

export const AuthenticatedRoute = props =>
  isUserAuthenticated() ?
  <Route
    { ...props } 
    exact={ props.exact } 
    path={ props.path } 
    component={ props.component } 
  />
  :
  <Redirect to="/login" />
  