import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import TextWithLabel from './text_with_label'

storiesOf('l2_molecules', module)
  .add('フォーム部品', () =>
    <div>
      <TextWithLabel 
        id              = 'test001'
        name            = 'test001'
        label           = "テスト"
        placeholder     = "プレースホルダー"
        handleChange    = {action('Called handleChange')}
      />
    </div>
  )
