import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import TwoButton from './two_button'

storiesOf('l2_molecules', module)
  .add('2ボタントレイ', () =>
    <div>
      <TwoButton
        config      = {[{
          id:     'cancel',
          name:   'cancel',
          label:  'Cancel'
        }, {
          id:     'ok',
          name:   'ok',
          label:  'OK'
        }]}

      />
    </div>
  , {
    info: {
      inline: true,
      header: false,
      text: '幅はフリー。右寄せ。'
    }
  })
