import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import CentralBoxPure from './central_box'

storiesOf('l4_templates', module)
  .add('中央ボックス', () =>
    <div>
      <CentralBoxPure>
        <div>中心</div>
      </CentralBoxPure>
    </div>
  , {
    info: {
      inline: true,
      header: false,
      text: ''
    }
  })
