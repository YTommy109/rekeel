import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import Drawer from './drawer'

storiesOf('l2_molecules', module)
  .addDecorator(withKnobs)
  .add('ドロワー', () => 
    <div>
      <Drawer
        isShow = {boolean('ドロワー', false)}
      >
        <div>Left</div>
        <div>Right</div>
      </Drawer>
    </div>
  , {
    info: {
      inline: true,
      header: false
    }
  })
