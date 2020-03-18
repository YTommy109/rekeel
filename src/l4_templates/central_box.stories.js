import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import CentralBox from './central_box'
import TwoPane from './two_pane'

storiesOf('l4_templates', module)
  .add('中央ボックス', () =>
    <div>
      <CentralBox>
        <div>中心</div>
      </CentralBox>
    </div>
  , {
    info: {
      inline: true,
      header: false,
      text: ''
    }
  })
  .add('2 ペイン', () =>
    <div>
      <TwoPane
        drawer = {<div>サブ</div>}>
        <div>メイン</div>
      </TwoPane>
    </div>
  , {
    info: {
      inline: true,
      header: false,
      text: ''
    }
  })
