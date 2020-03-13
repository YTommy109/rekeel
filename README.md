# ReKeel
Start code for React project.

React を使ったプロジェクトの私用のスタートコードです。

デザイナーによるフルカスタマイズを想定した (React コンポーネントセットは使わない) もので、ヘビープロジェクト向けになっており、アトミックデザイン、 CSS Grid、 storybook、 redux、 testcafe、plato、ESDoc などが含まれています。また、[customize-cra](https://github.com/arackaf/customize-cra) を使った [Babel](https://babeljs.io) の設定変更も行なっています。

各種レポートを記録するようにしてあり、 [jest](https://jestjs.io/ja/) の結果を常時 report/report.html に出力するようにしてあるほか、カバレッジや testcafe のレポートを記録するスクリプトも含めています。

```sh
$ yarn coverage     # jest によるテストカバレッジ
$ yarn cafe:report  # testcafe のテスト記録
$ yarn plato        # plato によるソースコードの静的解析
$ yarn doc          # esdoc によるドキュメント生成
```

storybook は [Netlife](https://rekeel.netlify.com) に連携してあります。

## 環境設定

```sh
REACT_APP_MAPBOX_TOKEN  = <Access Token>
```

地図コンポーネントで MAPBOX を使ってます。

## 採用技術

<dl>
    <dt>ステート</dt>
    <dd>Redux</dd>
    <dt>非同期</dt>
    <dd>Redux-thunk</dd>
    <dt>スタイル</dt>
    <dd>styled components</dd>
    <dd>Storybook</dd>
    <dt>テスト (TDD)</dt>
    <dd>enzyme</dd>
    <dt>テスト (E2E)</dt>
    <dd>TestCafe</dd>
    <dt>静的解析</dt>
    <dd>plato</dd>
    <dt>ドキュメント</dt>
    <dd>esdoc</dd>
</dl>


## TODO

- [x] L3 Sample
- [x] L4 Sample
- [x] L5 Sample
- [x] Application Sample
- [x] TestCafe Sample
- [ ] React Hooks Sample
- [ ] redux-thunk を使ったサンプル
- [ ] data-test を使ったテストのサンプル
