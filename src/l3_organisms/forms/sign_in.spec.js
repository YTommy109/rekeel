import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import SignIn from './sign_in'

describe('サインインについて', () => {
  const handleChange  = jest.fn()
  const handleOK      = jest.fn()
  const handleCancel  = jest.fn()
  beforeEach(() => {
    handleChange.mockClear()
    handleOK.mockClear()
    handleCancel.mockClear()
    render(
      <SignIn
        handleChange  = {handleChange}
        handleOK      = {handleOK}
        handleCancel  = {handleCancel}
      />
    )
  })

  describe('フォーム名について', () => {
    it('存在すること', () => {
      const target = screen.getByTestId('label')
      expect(target).toBeInTheDocument()
    })
  })

  describe('アカウント入力欄について', () => {
    it('存在すること', () => {
      const target = screen.getByLabelText('アカウント')
      expect(target).toBeInTheDocument()
    })

    it('パラメータが設定されてること', () => {
      const target = screen.getByLabelText('アカウント')
      expect(target).toHaveAttribute('id', 'account')
      expect(target).toHaveAttribute('name', 'account')
    })

    it('ハンドラーが呼ばれること', () => {
      const target = screen.getByLabelText('アカウント')
      fireEvent.change(target, {target: {value: 'a'}})
      expect(handleChange).toBeCalledTimes(1)
    })
  })

  describe('パスワード入力欄について', () => {
    it('存在すること', () => {
      const target = screen.getByLabelText('パスフレーズ')
      expect(target).toBeInTheDocument()
    })

    it('パラメータが設定されてること', () => {
      const target = screen.getByLabelText('パスフレーズ')
      expect(target).toHaveAttribute('id', 'password')
      expect(target).toHaveAttribute('name', 'password')
    })

    it('ハンドラーが呼ばれること', () => {
      const target = screen.getByLabelText('パスフレーズ')
      fireEvent.change(target, {target: {value: 'a'}})
      expect(handleChange).toBeCalledTimes(1)
    })
  })

  describe('ボタンエリアについて', () => {
    it('存在すること', () => {
      const target = screen.getByTestId('buttonbar')
      expect(target).toBeInTheDocument()
    })

    it('サインインボタンがあること', () => {
      const target = screen.getByDisplayValue('サインイン')
      expect(target).toBeInTheDocument()
    })

    it('サインインハンドラーが呼ばれること', () => {
      const target = screen.getByDisplayValue('サインイン')
      fireEvent.click(target, {target: {value: ''}})
      expect(handleOK).toBeCalledTimes(1)
    })

    it('キャンセルハンドラーが呼ばれること', () => {
      const target = screen.getByDisplayValue('キャンセル')
      fireEvent.click(target, {target: {value: ''}})
      expect(handleCancel).toBeCalledTimes(1)
    })
  })
})
