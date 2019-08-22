import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import TextWithLabel from './text_with_label'
import PswdWithLabel from './pswd_with_label'

storiesOf('l2_molecules', module)
  .add('フォーム部品', () =>
    <div>
      <TextWithLabel 
        id              = 'test001'
        name            = 'test001'
        label           = "テキストのタイトル"
        placeholder     = "テキストのプレースホルダー"
        handleChange    = {action('Called handleChange')}
      />
      <br />
      <PswdWithLabel 
        id              = 'test002'
        name            = 'test002'
        label           = "パスワードのタイトル"
        placeholder     = "パスワードのプレースホルダー"
        handleChange    = {action('Called handleChange')}
      />
    </div>
  , {
    info: {
      inline: true,
      header: false,
      text: `
          横幅は上位の DIV で設定して利用する。
          `
    }
  })
