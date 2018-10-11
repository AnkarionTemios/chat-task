import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isUserAuthenticated } from 'helpers'

export const UnauthenticatedRoute = props =>
  isUserAuthenticated() ?
  <Redirect to="/" />
  :
  <Route 
    { ...props } 
    exact={ props.exact } 
    path={ props.path } 
    component={ props.component } 
  />