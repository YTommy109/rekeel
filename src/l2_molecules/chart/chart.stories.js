import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Frame from '~/l1_atoms/frame'
import BarChart from './bar_chart'
import LineChart from './line_chart'

const datum = [{
  key: 'Cumulative Return',
  values: [
    {
      'label' : 'A' ,
      'value' : -29.765957771107
    } ,
    {
      'label' : 'B' ,
      'value' : 0
    } ,
    {
      'label' : 'C' ,
      'value' : 32.807804682612
    } ,
    {
      'label' : 'D' ,
      'value' : 196.45946739256
    } ,
    {
      'label' : 'E' ,
      'value' : 0.19434030906893
    } ,
    {
      'label' : 'F' ,
      'value' : -98.079782601442
    } ,
    {
      'label' : 'G' ,
      'value' : -13.925743130903
    } ,
    {
      'label' : 'H' ,
      'value' : -5.1387322875705
    }
  ]
}]

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
]

storiesOf('l2_molecules', module)
  .add('チャート部品', () =>
    <div>
      <Frame>
        <h2>バーチャートのサンプル</h2>
        <BarChart datum={datum} />
      </Frame>
      <Frame>
        <h2>ラインチャートのサンプル</h2>
        <LineChart data={data} />
      </Frame>
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
