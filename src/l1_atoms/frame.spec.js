import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Frame from './frame'

describe('フレームについて', () => {
  const Child = () => <span>TEST</span>
  beforeEach(() => {
    render(<Frame><Child /></Frame>)
  })

  it('子要素が存在すること', () => {
    const target = screen.getByText('TEST')
    expect(target).toBeInTheDocument()
  })
})
