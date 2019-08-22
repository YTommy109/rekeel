import React from 'react'
import {shallow} from 'enzyme'
import {PswdWithLabelPure} from './pswd_with_label'

describe('タイトル付きパスワード入力について', () => {
  const wrapper = shallow(
    <PswdWithLabelPure
      id      = "dummy"
      name    = "ネーム"
      label   = "ラベル"
    />
  )

  describe('label について', () => {
    const target = wrapper.find('label')

    it('パラメーターが渡っていること', () => {
      expect(target).toHaveProp('htmlFor', 'dummy')
    })

    it('ラベルが渡っていること', () => {
      expect(target).toHaveText('ラベル')
    })
  })

  describe('input について', () => {
    const target = wrapper.find('input')

    it('パラメーターが渡っていること', () => {
      expect(target).toHaveProp({
        id:     'dummy',
        type:   'password',
        name:   'ネーム'
      })
    })
  })
})
