import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import MidleTable from './midle_table'

describe('MidleTable について', () => {
  const handleFocus = jest.fn()
  beforeEach(() => {
    handleFocus.mockClear()
  })

  describe('正常系について', () => {
    beforeEach(() => {
      render(<MidleTable
        header      = {['label1', 'label2']}
        data        = {[['d1', 'd2'], ['d3', 'd4']]}
        handleFocus = {handleFocus}
      />)
    })
  
    it('私たヘッダーが表示されること', () => {
      const target = screen.getByText('label1')
      expect(target).toBeInTheDocument()
    })
  
    it('私たデータが表示されること', () => {
      const target = screen.getByText('d1')
      expect(target).toBeInTheDocument()
    })
  
    it('行クリックでフォーカスハンドラーが呼ばれること', () => {
      const target = screen.getByText('d1')
      fireEvent.click(target)
      expect(handleFocus).toBeCalledTimes(1)
    })
  })

  describe('', () => {
    it('フォーカスハンドラーを渡さなくても、エラーにならないこと', () => {
      render(<MidleTable
        header      = {['label1', 'label2']}
        data        = {[['d1', 'd2'], ['d3', 'd4']]}
      />)
      const target = screen.getByText('d1')
      fireEvent.click(target)
      expect(handleFocus).toBeCalledTimes(0)
    })
  })
  
})
