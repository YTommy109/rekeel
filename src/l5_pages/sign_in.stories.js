import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import SignInPage from './sign_in'

storiesOf('l5_pages', module)
  .add('サインイン', () =>
    <div>
      <SignInPage
      />
    </div>
  , {
    info: {
      inline: true,
      header: false,
      text: ''
    }
  })
