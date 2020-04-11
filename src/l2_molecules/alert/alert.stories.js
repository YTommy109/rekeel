import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import Alert from './alert'

storiesOf('l2_molecules', module)
  .addDecorator(withKnobs)
  .add('アラート', () => 
    <div>
      <Alert />
    </div>
  , {
    info: {
      inline: true,
      header: false
    }
  })
