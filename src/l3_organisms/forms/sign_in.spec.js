import React from 'react'
import {shallow} from 'enzyme'
import {SignInPure} from './sign_in'
import TwoButton from '~/l2_molecules/toolbar/two_button'

describe('サインインフォームについて', () => {
  const wrapper = shallow(
    <SignInPure
    />
  )

  describe('フォーム名について', () => {
    const target = wrapper.find('legend')

    it('フォーム名があること', () => {
      expect(target).toHaveLength(1)
    })
  })

  describe('アカウント入力欄について', () => {
    const target = wrapper.find('#account')

    it('アカウント入力欄があること', () => {
      expect(target).toHaveLength(1)
    })
    it('パラメーターが設定されていること', () => {
      expect(target).toHaveProp({
        name:   'account',
        label:  expect.anything()
      })
    })
  })

  describe('パスワード入力欄について', () => {
    const target = wrapper.find('#password')

    it('アカウント入力欄があること', () => {
      expect(target).toHaveLength(1)
    })
    it('パラメーターが設定されていること', () => {
      expect(target).toHaveProp({
        name:   'password',
        label:  expect.anything()
      })
    })
  })

  describe('ボタンエリアについて', () => {

    const target = wrapper.find(TwoButton)
    it('ボタンエリアがあること', () => {
      expect(target).toHaveLength(1)
    })
    it('ボタンエリアにパラメーターが設定されていること', () => {
      expect(target).toHaveProp({
        config:   [{
          id:     'cancel',
          name:   'cancel',
          label:  expect.anything()
        }, {
          id:     'signin',
          name:   'signin',
          label:  expect.anything()
            
        }],
      })
    })
  })
})
