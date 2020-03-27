import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import CurrentMap from './current_map'

storiesOf('l2_molecules', module)
  .add('マップ部品', () => {
    console.log(process.env)
    return (
      <div>
        <CurrentMap style={{height: 180 + 'px'}}
          handleCurrent   = {action('現在地ボタンを押しました!')}
          mapClickHandle  = {action('マップをクリックしました!')}
          center = {[35.651687, 139.789177]}
          points = {[
            [35.655640, 139.790989],
            [35.652031, 139.793092],
            [35.649076, 139.790860]
          ]}
        />
      </div>
    )
  }
  , {
    info: {
      inline: true,
      header: false,
      text: `
          横幅は上位の DIV で設定して利用する。
          `
    }
  })
