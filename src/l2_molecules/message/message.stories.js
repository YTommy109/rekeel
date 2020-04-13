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
        message="Hello!"
        msgStyle={select('スタイル', ['normal', 'danger'], 'normal')}
        isShow={boolean('表示', false)}
      />
    </div>
  , {
    info: {
      inline: true,
      header: false
    }
  })
