import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import Button from './button'

describe('ボタンについて', () => {
  const handle = jest.fn()
  beforeEach(() => {
    render(<Button
      id          = 'test001'
      label       = 'BUTTON'
      handleClick = {handle}
    />)
  })
  it('ボタンが存在すること', () => {
    const target = screen.getByText('BUTTON')
    expect(target).toBeInTheDocument()
  })
  it('タイプが button であること', () => {
    const target = screen.getByText('BUTTON')
    expect(target).toHaveAttribute('type', 'button')
  })
  it('ID が設定されていること', () => {
    const target = screen.getByText('BUTTON')
    expect(target).toHaveAttribute('id', 'test001')
  })
  it('クリックで関数が呼ばれること', () => {
    const target = screen.getByText('BUTTON')
    fireEvent.click(target)
    expect(handle).toBeCalledTimes(1)
  })
  it.todo('enable/disable を切り替えられること')
})
