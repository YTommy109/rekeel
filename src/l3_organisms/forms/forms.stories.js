import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import SignIn from './sign_in'

storiesOf('l3_organisms', module)
  .add('サインイン', () =>
    <div>
      <SignIn
      />
    </div>
  , {
    info: {
      inline: true,
      header: false,
      text: '幅はフリー。上位タグで指定。'
    }
  })
