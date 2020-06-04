import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {select} from '@storybook/addon-knobs'
import CentralBox from './central_box'
import TwoPane from './two_pane'
import Kannon from './kannon'
import RightArrangeTray from './tray'

storiesOf('l4_templates', module)
  .add('中央ボックス', () =>
    <div>
      <CentralBox>
        <div>中心</div>
      </CentralBox>
    </div>
  , {
    info: {
      inline: true,
      header: false,
      text: ''
    }
  })
  .add('2 ペイン', () =>
    <div>
      <TwoPane
        drawer = {<div>サブ</div>}>
        <div>メイン</div>
      </TwoPane>
    </div>
  , {
    info: {
      inline: true,
      header: false,
      text: ''
    }
  })
  .add('Kannon', () =>
    <div>
      <h2>Kannon</h2>
      <Kannon left="30%">
        <div style={{backgroundColor:'silver'}}>左 30% </div>
        <div style={{backgroundColor:'skyblue'}}>右 デフォルト</div>
      </Kannon>
      <br />
      <Kannon right="30%">
        <div style={{backgroundColor:'silver'}}>左 デフォルト </div>
        <div style={{backgroundColor:'skyblue'}}>右 30%</div>
      </Kannon>
      <br />
      <Kannon>
        <div style={{backgroundColor:'silver'}}>左 デフォルト </div>
        <div style={{backgroundColor:'skyblue'}}>右 デフォルト</div>
      </Kannon>
    </div>
  , {
    info: {
      inline: true,
      header: false,
      text: ''
    }
  })
  .add('右側へ並べるトレイ', () =>
    <div>
      <RightArrangeTray>
        <span>1個目</span>
      </RightArrangeTray>
      <br />
      <RightArrangeTray>
        <span>1個目</span>
        <span>2個目</span>
      </RightArrangeTray>
      <br />
      <RightArrangeTray>
        <span>1個目</span>
        <span>2個目</span>
        <span>3個目</span>
        <span>4個目</span>
        <span>5個目</span>
      </RightArrangeTray>
    </div>
  , {
    info: {
      inline: true,
      header: false,
      text: '**等間隔のギャップ** を開けて右寄せで子要素を並べる。'
    }
  })
