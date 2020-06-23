import React from 'react'
import {RecoilRoot} from 'recoil'
import {render, fireEvent, screen} from '@testing-library/react'
import SignIn from './sign_in'


describe('サインインコンテナについて', () => {
  beforeEach(() => {
    render(<RecoilRoot><SignIn /></RecoilRoot>)
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
