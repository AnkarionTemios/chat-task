import React, { Component } from 'react'

import './LoginForm.css'

export class LoginForm extends Component {
  
  state = {
    user: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.logIn(this.state.user)
  }

  handleChange = event => this.setState({ user: event.target.value })

  render() {
    return (
      <div className="login-form uk-position-center uk-width-1-2">
        
        <h1 className="uk-text-center">Chat App</h1>
        
        <form onSubmit={ this.handleSubmit }>
        
          <div className="uk-flex uk-flex-column uk-flex-middle">
          
            <input 
              type="text"
              placeholder="Enter your name"
              className="uk-width-1-2" 
              value={ this.state.user } 
              onChange={ this.handleChange } 
            />

            <button 
              type="submit"
              className="uk-width-1-4 uk-margin-small-top" 
              disabled={ this.state.user.length < 3 } 
            >
              Log In
            </button>
          
          </div>

        </form>
      
      </div>
    )
  }
}