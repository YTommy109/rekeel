import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import PullDown from './pulldown'

describe('プルダウンリストについて', () => {
  const handleChange = jest.fn()
  describe('初期値がない場合について', () => {
    beforeEach(() => {
      handleChange.mockClear()
      render(<PullDown
        id            = "hoge"
        name          = "hoge"
        placeholder   = "HOGE"
        value         = ''
        items         = {[
          {label: 'item1', value: 'a'},
          {label: 'item2', value: 'b'}
        ]}
        handleChange  = {handleChange}
      />)
    })
  
    it('プレースホルダーが設定されてること', () => {
      const target = screen.getByText('HOGE')
      expect(target).toHaveValue('')
    })
  
    it('item1 の value が設定されてること', () => {
      const target = screen.getByText('item1')
      expect(target).toHaveValue('a')
    })
  
    it('値が変更されたらコールバックが呼ばれること', () => {
      const target = screen.getByTestId('select')
      expect(target).toHaveValue('')
      expect(screen.getByText('item1').selected).toBe(false)
      fireEvent.change(target, {target: {value: 'a'}})
      expect(handleChange).toBeCalledTimes(1)
    })
  })

  describe('初期値がある場合について', () => {
    beforeEach(() => {
      handleChange.mockClear()
      render(<PullDown
        id            = "hoge"
        name          = "hoge"
        placeholder   = "HOGE"
        value         = "b"
        items         = {[
          {label: 'item1', value: 'a'},
          {label: 'item2', value: 'b'}
        ]}
        handleChange  = {handleChange}
      />)
    })
  
    it('item1 が選択されてないこと', () => {
      const target = screen.getByText('item1')
      expect(target.selected).toBe(false)
    })

    it('item2 が選択されていること', () => {
      const target = screen.getByText('item2')
      expect(target.selected).toBe(true)
    })

    it('イベントが発火してないこと', () => {
      expect(handleChange).toBeCalledTimes(0)
    })
  })
})
