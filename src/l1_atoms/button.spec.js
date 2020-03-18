import React from 'react'
import {shallow} from 'enzyme'
import {ButtonPure} from './button'

const dummy = () => {}

describe('ボタンについて', () => {
  const wrapper = shallow(
    <ButtonPure
      id          = "dummy"
      label       = "ラベル"
      handleClick = {dummy}
    />
  )
  const target = wrapper.find('input[type="button"]')

  it('ボタンが存在すること', () => {
    expect(target).toHaveLength(1)
  })

  it('パラメーターが渡っていること', () => {
    expect(target).toHaveProp({
      id:       'dummy',
      value:    'ラベル',
      onClick:  dummy
    })
  })
})
