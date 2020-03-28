import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import SignInPage from './sign_in'

describe('サインインページについて', () => {
  const handleChange  = jest.fn()
  const handleOK      = jest.fn()
  const handleCancel  = jest.fn()

  beforeEach(() => {
    handleChange.mockClear()
    handleOK.mockClear()
    handleCancel.mockClear()
    render(
      <SignInPage
        updateText    = {handleChange}
        handleOK      = {handleOK}
        handleCancel  = {handleCancel}
      />
    )
  })
  it('アカウントを入力できること', () => {
    const target = screen.getByLabelText('アカウント')
    fireEvent.change(target, {target: {value: 'a'}})
    expect(handleChange).toBeCalledTimes(1)
  })

  it('パスワードを入力できること', () => {
    const target = screen.getByLabelText('パスフレーズ')
    fireEvent.change(target, {target: {value: 'a'}})
    expect(handleChange).toBeCalledTimes(1)
  })

  it('サインインボタンを押せること', () => {
    const target = screen.getByDisplayValue('サインイン')
    fireEvent.click(target, {target: {value: ''}})
    expect(handleOK).toBeCalledTimes(1)
  })

  it('キャンセルボタンを押せること', () => {
    const target = screen.getByDisplayValue('キャンセル')
    fireEvent.click(target, {target: {value: ''}})
    expect(handleCancel).toBeCalledTimes(1)
  })
})
