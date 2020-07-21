import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import MultiPropTable from './multi_prop_table'

const data = [[
  {title: 'title1', value: 'value1'},
  {title: 'title2', value: 'value2'}
], [
  {title: 'title3', value: 'value3'},
  {title: 'title4', value: 'value4'}
]]

describe('MultiPropTable について', () => {
  beforeEach(() => {
    render(<MultiPropTable
      data = {data}
    />)
  })
  it('一つ目の PropTable が表示されること', () => {
    const target1 = screen.getByText('title1')
    const target2 = screen.getByText('title2')
    const target3 = screen.getByText('value1')
    const target4 = screen.getByText('value2')
    expect(target1).toBeInTheDocument()
    expect(target2).toBeInTheDocument()
    expect(target3).toBeInTheDocument()
    expect(target4).toBeInTheDocument()
  })
  it('二つ目の PropTable が表示されること', () => {
    const target1 = screen.getByText('title3')
    const target2 = screen.getByText('title4')
    const target3 = screen.getByText('value3')
    const target4 = screen.getByText('value4')
    expect(target1).toBeInTheDocument()
    expect(target2).toBeInTheDocument()
    expect(target3).toBeInTheDocument()
    expect(target4).toBeInTheDocument()
  })
})
