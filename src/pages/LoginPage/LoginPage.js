import React from 'react'

import { connect } from 'react-redux'
import { logIn } from 'store/authentication'

import { LoginForm } from 'ui/components'

import './LoginPage.css'

const LoginPage = ({ logIn }) => (
  <div className="login-page">
    <LoginForm logIn={ logIn } />
  </div>
)

const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user))
})

export default connect(null, mapDispatchToProps)(LoginPage)