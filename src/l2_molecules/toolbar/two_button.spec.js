import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import TwoButton from './two_button'

describe('ツーボタンバーについて', () => {
  const btn1 = jest.fn()
  const btn2 = jest.fn()
  const config = [{
    id:           'id1',
    name:         'name1',
    label:        'label1',
    handleClick:  btn1
  }, {
    id:           'id2',
    name:         'name2',
    label:        'label2',
    handleClick:  btn2
  }]
  beforeEach(() => {
    btn1.mockClear()
    btn2.mockClear()
    render(<TwoButton config={config}/>)

  })
  describe('ボタン1 について', () => {
    it('存在すること', () => {
      const target = screen.getByDisplayValue('label1')
      expect(target).toBeInTheDocument()
    })

    it('プロパティが渡されていること', () => {
      const target = screen.getByDisplayValue('label1')
      expect(target).toHaveAttribute('id', 'id1')
      expect(target).toHaveAttribute('name', 'name1')
    })

    it('ハンドラーが呼ばれること', () => {
      const target = screen.getByDisplayValue('label1')
      fireEvent.click(target, {target: {}})
      expect(btn1).toBeCalledTimes(1)
    })
  })

  describe('ボタン2 について', () => {
    it('ボタン2 が存在すること', () => {
      const target = screen.getByDisplayValue('label2')
      expect(target).toBeInTheDocument()
    })

    it('プロパティが渡されていること', () => {
      const target = screen.getByDisplayValue('label2')
      expect(target).toHaveAttribute('id', 'id2')
      expect(target).toHaveAttribute('name', 'name2')
    })

    it('ハンドラーが呼ばれること', () => {
      const target = screen.getByDisplayValue('label2')
      fireEvent.click(target, {target: {}})
      expect(btn2).toBeCalledTimes(1)
    })
  })
})
