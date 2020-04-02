import React from 'react'
import {Provider} from 'react-redux'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {render, fireEvent, screen} from '@testing-library/react'
import reducer from '~/modules'
import SignIn from './sign_in'

const initialState = {}
const middleware = [...getDefaultMiddleware()]
const renderWithRedux = (ui,
  {initialState, store = configureStore({reducer, middleware})} = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  }
}

describe('サインインコンテナについて', () => {
  beforeEach(() => {
    renderWithRedux(<SignIn />)
  })

  it('アカウントが入力されること', () => {
    const target = screen.getByLabelText('アカウント')
    fireEvent.change(target, {target: {value: 'a'}})
    expect(target).toHaveValue('a')
  })

  it('パスワードが入力されること', () => {
    const target = screen.getByLabelText('パスフレーズ')
    fireEvent.change(target, {target: {value: 'a'}})
    expect(target).toHaveValue('a')
  })
})
