import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import RemovableItem from './removable_item'

describe('削除可能アイテムについて', () => {
  const handle = jest.fn()
  beforeEach(() => {
    render(<RemovableItem
      index         = {3}
      label         = 'アイテム1'
      handleRemove  = {handle}
    />)
  })

  it('アイテム1 があること', () => {
    const target = screen.getByText('アイテム1')
    expect(target).toBeInTheDocument()
  })

  it('クリックできること', () => {
    const target = screen.getByTestId('btn001')
    fireEvent.click(target)
    expect(handle).toBeCalledTimes(1)
    expect(handle).toBeCalledWith(3)
  })
})
