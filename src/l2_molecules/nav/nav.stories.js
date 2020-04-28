import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import NavBar, {NavItem} from './nav'

storiesOf('l2_molecules', module)
  .add('ナビゲーション', () =>
    <div>
      <NavBar brand="ReKeel">
        <NavItem>メニュー1</NavItem>
        <NavItem isActive={true}>メニュー2</NavItem>
        <NavItem>メニュー3</NavItem>
      </NavBar>
    </div>
  , {
    info: {
      inline: true,
      header: false,
      text: '幅はフリー。右寄せ。'
    }
  })
