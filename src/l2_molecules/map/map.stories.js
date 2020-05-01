import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import CurrentMap from './current_map'

storiesOf('l2_molecules', module)
  .add('マップ部品', () =>
    <div>
      <CurrentMap style={{width: '100%', height: '80vh'}}
        handleClickOnMap  = {action('マップをクリックしました!')}
        adhoc             = {['35.684195', '139.743789']}
        points            = {[
          ['35.688195', '139.743789'],
          ['35.690375', '139.753789'],
          ['35.690375', '139.758789']
        ]}
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
