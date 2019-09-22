import React from 'react'
import {shallow} from 'enzyme'
import {FramePure} from './frame'

describe('ボタンについて', () => {
  const wrapper = shallow(
    <FramePure><span id='test001'>dummy</span></FramePure>
  )
  const target = wrapper.find('#test001')

  it('パラメーターが渡っていること', () => {
    expect(target).toHaveLength(1)
    expect(target).toHaveText('dummy')
  })
})
