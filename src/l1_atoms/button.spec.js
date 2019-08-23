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
  const target = wrapper.find('button')

  it('パラメーターが渡っていること', () => {
    expect(target).toHaveProp({
      id: 'dummy',
      onClick: dummy
    })
  })

  it('ラベルが渡っていること', () => {
    expect(target).toHaveText('ラベル')
  })

})
