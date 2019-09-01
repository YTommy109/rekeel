import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import './index.css'
import App from './App'
import reducer from './modules'
import * as serviceWorker from './serviceWorker'

const middlewares = []

// logger ミドルウェアを追加する
if (process.env.NODE_ENV === 'development') {
  const {logger} = require('redux-logger')

  middlewares.push(logger)
}

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
