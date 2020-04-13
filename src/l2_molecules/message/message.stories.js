import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, select} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import MessageBar from './message_bar'

storiesOf('l2_molecules', module)
  .addDecorator(withKnobs)
  .add('メッセージ', () => 
    <div>
      <MessageBar
        message   = "Hello!"
        isShow    = {boolean('表示', false)}
        msgStyle  = {select('スタイル', ['normal', 'danger'], 'normal')}
      />
    </div>
  , {
    info: {
      inline: true,
      header: false
    }
  })
