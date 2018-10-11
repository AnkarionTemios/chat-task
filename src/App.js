import React from 'react'

import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import { rootReducer } from 'store'
import createHistory from 'history/createBrowserHistory'

import * as pages from 'pages'

const history = createHistory()

const historyMiddleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, historyMiddleware))
)

// const messages = [
//   { user: "John", text: 'Hey everyone', id: 1 },
//   { user: "Jack", text: 'Hey!', id: 2 },
//   { user: "John", text: 'How is it going?', id: 3 },
//   { user: "Jack", text: 'Great', id: 4 },
// ]

// localStorage.setItem('messages', JSON.stringify(messages))

// const rooms = ["Flood", "Spam", "Work", "Launch"]
// localStorage.setItem('rooms', JSON.stringify(rooms))

export const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        
        <Route path="/" exact={ true } component={ pages.ChatPage } />

        <Route path="/login" component={ pages.LoginPage } />

      </Switch>
    </Router>
  </Provider>
)