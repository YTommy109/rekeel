import React from 'react'
import {shallow} from 'enzyme'
import {TextWithLabelPure} from './text_with_label'

describe('', () => {
  const wrapper = shallow(
    <TextWithLabelPure
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
        type:   'text',
        name:   'ネーム'
      })
    })
  })
})
