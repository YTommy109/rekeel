import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Frame from '~/l1_atoms/frame'
import BarChart from './bar_chart'

storiesOf('l2_molecules', module)
  .add('チャート部品', () =>
    <Frame>
      <h2>バーチャートのサンプル</h2>
      <BarChart />
    </Frame>
  , {
    info: {
      inline: true,
      header: false,
      text: `
        横幅は上位の DIV で設定して利用する。
        `
    }
  })
