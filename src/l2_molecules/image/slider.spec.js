import React from 'react'
import {shallow} from 'enzyme'
import {SliderPure} from './slider'

describe('スライダーについて', () => {
  const handle = jest.fn()
  const wrapper = shallow(
    <SliderPure
      className     = 'hoge'
      image1        = 'img1'
      image2        = 'img2'
      handleChange  = {handle}
    />
  )

  it('styled-components に対応していること', () => {
    expect(wrapper.hasClass('hoge')).toBe(true)
  })

  describe('img タグについて', () => {
    const target1 = wrapper.find('img[data-testid="img1"]')
    const target2 = wrapper.find('img[data-testid="img2"]')
    it('image1 用の img があること', () => {
      expect(target1).toHaveLength(1)
    })
    it('image1 が渡されていること', () => {
      expect(target1.prop('src')).toEqual('img1')
    })
    it('image2 用の img があること', () => {
      expect(target2).toHaveLength(1)
    })
    it('image2 が渡されていること', () => {
      expect(target2.prop('src')).toEqual('img2')
    })
  })

  describe('input タグについて', () => {
    const target = wrapper.find('input')
    it('input タグがあること', () => {
      expect(target).toHaveLength(1)
    })
    it('type が rangeであること', () => {
      expect(target.prop('type')).toEqual('range')
    })
    it('ハンドラーが渡されていること', () => {
      expect(target.prop('onChange')).toEqual(handle)
      target.simulate('change')
      expect(handle).toBeCalledTimes(1)
    })
  })
})
