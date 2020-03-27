import React from 'react'
import ReactDOM from 'react-dom'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import './index.css'
import App from './App'
import reducer from './modules'
import * as serviceWorker from './serviceWorker'

const middleware = [...getDefaultMiddleware()]

// logger ミドルウェアを追加する
if (process.env.NODE_ENV === 'development') {
  const {logger} = require('redux-logger')

  middleware.push(logger)
}

const store = configureStore({reducer, middleware})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
