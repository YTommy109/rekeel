import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean, select} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import Button from './button'
import Frame from './frame'
import EmptyBox from './empty_box'
import Switch from './switch'

storiesOf('l1_atoms', module)
  .addDecorator(withKnobs)
  .add('ボタン', () => 
    <React.Fragment>
      <Frame>
        <h3>Small サイズ</h3>
        <Button id="b11" size="sm" label="標準ボタン" handleClick={action('normal clicked')} disabled={boolean('無効化', false)} />
        <Button id="b03" size="sm" btnStyle="primary" label="優先ボタン" handleClick={action('primary clicked')} disabled={boolean('無効化', false)} />
        <Button id="b03" size="sm" btnStyle="danger" label="注意ボタン" handleClick={action('danger clicked')} disabled={boolean('無効化', false)} />
      </Frame>

      <Frame>
        <h3>標準サイズ</h3>
        <Button id="b11" label="標準ボタン" handleClick={action('normal clicked')} disabled={boolean('無効化', false)} />
        <Button id="b03" btnStyle="primary" label="優先ボタン" handleClick={action('primary clicked')} disabled={boolean('無効化', false)} />
        <Button id="b03" btnStyle="danger" label="注意ボタン" handleClick={action('danger clicked')} disabled={boolean('無効化', false)} />
      </Frame>

      <Frame>
        <h3>Large サイズ</h3>
        <Button id="b11" size="lg" label="標準ボタン" handleClick={action('normal clicked')} disabled={boolean('無効化', false)} />
        <Button id="b03" size="lg" btnStyle="primary" label="優先ボタン" handleClick={action('primary clicked')} disabled={boolean('無効化', false)} />
        <Button id="b03" size="lg" btnStyle="danger" label="注意ボタン" handleClick={action('danger clicked')} disabled={boolean('無効化', false)} />
      </Frame>
    </React.Fragment>
  , {
    info: {
      inline: true,
      header: false
    }
  })
  .add('スイッチ', () => 
    <Frame>
      <Switch
        value         = {select('スイッチ', ['0', '1', '2'], '0')}
        items         = {[
          {label: 'ON',     value: '1'},
          {label: 'Midle',  value: '2'},
          {label: 'OFF',    value: '0'},
        ]}
        handleChange  = {action('スイッチ変更アクションが呼ばれた')}
      />
    </Frame>
  , {
    info: {
      inline: true,
      header: false
    }
  })
  .add('空のときのメッセージ', () => 
    <Frame>
      <EmptyBox />
    </Frame>
  , {
    info: {
      inline: true,
      header: false
    }
  })
