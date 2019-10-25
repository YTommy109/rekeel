import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Frame from '~/l1_atoms/frame'
import BarChart from './bar_chart'

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

storiesOf('l2_molecules', module)
  .add('チャート部品', () =>
    <Frame>
      <h2>バーチャートのサンプル</h2>
      <BarChart datum={datum} />
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
