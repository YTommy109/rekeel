import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Button from './button'
  
storiesOf('l1_atom', module)
  .add('ボタン', () => 
    <div>
      <h3>Small サイズ</h3>
      <Button id="b11" size="sm" label="有効ボタン" handleClick={action('normal clicked')} />
      <Button id="b12" size="sm" label="無効ボタン" disabled />
      <Button id="b03" size="sm" btnStyle="primary" label="優先ボタン" handleClick={action('primary clicked')} />
      <Button id="b04" size="sm" btnStyle="primary" label="優先無効ボタン" disabled />
      <Button id="b03" size="sm" btnStyle="danger" label="注意ボタン" handleClick={action('danger clicked')} />
      <Button id="b04" size="sm" btnStyle="danger" label="注意無効ボタン" disabled />

      <h3>標準サイズ</h3>
      <Button id="b11" label="有効ボタン" handleClick={action('normal clicked')} />
      <Button id="b12" label="無効ボタン" disabled />
      <Button id="b03" btnStyle="primary" label="優先ボタン" handleClick={action('primary clicked')} />
      <Button id="b04" btnStyle="primary" label="優先無効ボタン" disabled />
      <Button id="b03" btnStyle="danger" label="注意ボタン" handleClick={action('danger clicked')} />
      <Button id="b04" btnStyle="danger" label="注意無効ボタン" disabled />

      <h3>Large サイズ</h3>
      <Button id="b11" size="lg" label="有効ボタン" handleClick={action('normal clicked')} />
      <Button id="b12" size="lg" label="無効ボタン" disabled />
      <Button id="b03" size="lg" btnStyle="primary" label="優先ボタン" handleClick={action('primary clicked')} />
      <Button id="b04" size="lg" btnStyle="primary" label="優先無効ボタン" disabled />
      <Button id="b03" size="lg" btnStyle="danger" label="注意ボタン" handleClick={action('danger clicked')} />
      <Button id="b04" size="lg" btnStyle="danger" label="注意無効ボタン" disabled />
    </div>
  , {
    info: {
      inline: true,
      header: false
    }
  })
