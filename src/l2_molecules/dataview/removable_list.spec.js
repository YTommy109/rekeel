import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import RemovableList from './removable_list'

const data = [
  {label: 'データ1'},
  {label: 'データ2'}
]

describe('RemovableList について', () => {
  describe('空の場合について', () => {
    beforeEach(() => {
      render(<RemovableList
        empty_message = "空ですよ。"
      />)
    })

    it('指定したメッセージが出ること', () => {
      const target = screen.getByText('空ですよ。')
      expect(target).toBeInTheDocument()
    })
  })
  
  describe('データがある場合について', () => {
    const mockRemove = jest.fn()
    beforeEach(() => {
      mockRemove.mockClear()
      render(<RemovableList
        data          = {data}
        handleRemove  = {mockRemove}
      />)
    })
    it('データが表示されること', () => {
      const target1 = screen.getByText('データ1')
      const target2 = screen.getByText('データ2')
      expect(target1).toBeInTheDocument()
      expect(target2).toBeInTheDocument()
    })
    it('削除ハンドラーが呼ばれること', () => {
      const target1 = screen.getByText('データ1').lastChild
      const target2 = screen.getByText('データ2').lastChild
      fireEvent.click(target1)
      expect(mockRemove).toBeCalledTimes(1)
      fireEvent.click(target2)
      expect(mockRemove).toBeCalledTimes(2)
    })
  })
})
