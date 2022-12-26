import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Nav, {NavItem} from './nav'

describe('', () => {
  beforeEach(() => {
    render(
      <Nav brand="BRAND">
        <NavItem href='#1'>MENU 1</NavItem>
        <NavItem href='#2'>MENU 2</NavItem>
        <NavItem href='#3' isActive>MENU 3</NavItem>
      </Nav>
    )
  })

  it('ブランドがあること', () => {
    const target = screen.getByText('BRAND')
    expect(target).toBeInTheDocument()
  })

  it('メニュー1 があること', () => {
    const target = screen.getByText('MENU 1')
    expect(target).toBeInTheDocument()
    expect(target).not.toHaveClass('active')
    expect(target).toHaveProperty('href', 'http://localhost/#1')
  })

  it('メニュー2 があること', () => {
    const target = screen.getByText('MENU 2')
    expect(target).toBeInTheDocument()
    expect(target).not.toHaveClass('active')
    expect(target).toHaveProperty('href', 'http://localhost/#2')
  })

  it('メニュー3 があること', () => {
    const target = screen.getByText('MENU 3')
    expect(target).toBeInTheDocument()
    expect(target).toHaveClass('active')
    expect(target).toHaveProperty('href', 'http://localhost/#3')
  })
})
