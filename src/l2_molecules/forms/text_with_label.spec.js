import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import TextWithLabel from './text_with_label'

describe('ラベル付きパスワード入力について', () => {
  const handle = jest.fn()
  beforeEach(() => {
    render(<TextWithLabel
      id            = "dummy"
      name          = "ネーム"
      label         = "ラベル"
      value         = '値'
      placeholder   = 'プレホル'
      autoComplete  = 'hoge'
      handleChange  = {handle}
    />
    )
  })

  it('ラベルが存在すること', () => {
    const target = screen.getByLabelText('ラベル')
    expect(target).toBeInTheDocument()
  })

  it('パラメータが渡されていること', () => {
    const target = screen.getByLabelText('ラベル')
    expect(target).toHaveAttribute('id', 'dummy')
    expect(target).toHaveAttribute('name', 'ネーム')
    expect(target).toHaveAttribute('placeholder', 'プレホル')
    expect(target).toHaveValue('値')
  })

  it('パスワード入力であること', () => {
    const target = screen.getByLabelText('ラベル')
    expect(target).toHaveAttribute('type', 'text')
    expect(target).toHaveAttribute('autoComplete', 'hoge')
  })

  it('ハンドラーが呼ばれること', () => {
    const target = screen.getByLabelText('ラベル')
    fireEvent.change(target, {target: {value: 'a'}})
    expect(handle).toBeCalledTimes(1)
  })
})
