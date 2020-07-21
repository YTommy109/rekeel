import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withKnobs, number, boolean} from '@storybook/addon-knobs'
import PropTable from './prop_table'
import MultiPropTable from './multi_prop_table'
import MidleTable from './midle_table'
import RemovableList from './removable_list'

const datum = [
  {title: '見出し10', value: 'データ10'},
  {title: '見出し11', value: 'データ11'},
  {title: '見出し12', value: 'データ12'}
]

const data = [[
  {title: '見出し20', value: 'データ20'},
  {title: '見出し21', value: 'データ21'}
], [
  {title: '見出し30', value: 'データ30'},
  {title: '見出し31', value: 'データ31'}
]]

const data2 = [
  {label: 'アイテム11', latlng: '33,126'},
  {label: 'アイテム22', latlng: '33,128'},
  {label: 'アイテム33', latlng: '33,130'}
]

storiesOf('l2_molecules/データビュー', module)
  .addDecorator(withKnobs)
  .add('プロパティテーブル', () =>
    <PropTable data={datum} />
  , {
    info: {
      inline: true,
      header: false,
      text: '幅はフリー。右寄せ。'
    }
  })
  .add('マルチプロパティテーブル', () =>
    <MultiPropTable data={data} />
  , {
    info: {
      inline: true,
      header: false,
      text: '幅はフリー。右寄せ。'
    }
  })
  .add('ミドルテーブル', () =>
    <MidleTable
      header    = {['ヘッダー1', 'ヘッダー2', 'ヘッダー3']}
      data      = {[
        ['data10', 'data11', 'data12'],
        ['data20', 'data21', 'data22'],
        ['data30', 'data31', 'data32'],
      ]}
      focus         = {number('選択行', 1, {min:0, max:2})}
      handleFocus   = {action('行選択された。')}
    />
  , {
    info: {
      inline: true,
      header: false,
      text: '幅はフリー。右寄せ。'
    }
  })
  .add('削除可能リスト', () =>
    <React.Fragment>
      <p>データがない場合</p>
      <RemovableList
        data          = {[]}
        empty_message = "空になりました。"
        handleRemove  = {action('削除ボタンが押されました。')}
      />
      <p>データがある場合</p>
      <RemovableList
        data          = {data2}
        empty_message = "空になりました。"
        handleRemove  = {action('削除ボタンが押されました。')}
      />
    </React.Fragment>
  , {
    info: {
      inline: true,
      header: false,
      text: `
            横幅は上位の DIV で設定して利用する。
            `
    }
  })
